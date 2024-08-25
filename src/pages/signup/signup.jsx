import "../signup/signup.css";
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.png";
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastrService } from '../../toastrService';

function SignUp() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('user');
    const [country, setCountry] = useState('');
    const [fullName, setFullName] = useState('');
    const [cityName, setCityName] = useState('');
    const [postCode, setPostCode] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [numberOfEmployees, setNumberOfEmployees] = useState('');
    const [yearOfEstablishment, setYearOfEstablishment] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [tel, setTel] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(event.target.value);

        if (value === 'user') {
            setPasswordError('');
            setConfirmPasswordError('');
            setEmailError('');
            setConfirmEmailError('');
        } else if (value === 'company') {
            setPasswordError('');
            setConfirmPasswordError('');
            setEmailError('');
            setConfirmEmailError('');
        }
    };

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!()_+=\[{\]};:'",.<>?])[A-Za-z\d@#$%^&*!()_+=\[{\]};:'",.<>?]{8,}$/;
    const validatePassword = async (plainPassword) => {
        setPassword(plainPassword);

        if (!passwordRegex.test(plainPassword)) {
            setPasswordError('Password must be at least 8 characters (Atleast 1 uppercase, 1 lowercase, 1 digit and 1 symbol');
        } else {
            setPasswordError('');
        }

        validateConfirmPassword(confirmPassword, plainPassword);
    };

    const validateConfirmPassword = async (plainConfirmPassword, currentPassword = password) => {
        setConfirmPassword(plainConfirmPassword);

        if (plainConfirmPassword !== currentPassword) {
            setConfirmPasswordError('Passwords do not match.');
        } else {
            setConfirmPasswordError('');
        }
    };

    const validateEmail = async (plainEmail) => {
        setEmailAddress(plainEmail);

        // Simple email regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(plainEmail)) {
            setEmailError('Invalid email format.');
        } else {
            setEmailError('');
        }
    };

    const validateConfirmEmail = async (plainConfirmEmail) => {
        setConfirmEmail(plainConfirmEmail);

        if (plainConfirmEmail !== emailAddress) {
            setConfirmEmailError('Emails do not match.');
        } else {
            setConfirmEmailError('');
        }
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        await validatePassword(password);
        await validateEmail(emailAddress);
        await validateConfirmEmail(confirmEmail);

        // Check if there are any validation errors
        if (passwordError || confirmPasswordError || emailError || confirmEmailError) {
            return; // Prevent form submission if there are errors
        } else {
            let formData = {};
            formData.role = selectedOption;
            formData.country = country;
            formData.password = password;
            formData.confirmPassword = confirmPassword;
            formData.emailAddress = emailAddress;
            formData.tel = tel;

            if (selectedOption === 'user') {
                formData.companyName = fullName;
            } else if (selectedOption === 'company') {
                formData.cityName = cityName;
                formData.postCode = postCode;
                formData.companyName = companyName;
                formData.businessType = businessType;
                formData.numberOfEmployees = numberOfEmployees;
                formData.yearOfEstablishment = yearOfEstablishment;
            }

            axios({
                url: `http://localhost:3001/user/register`,
                method: "POST",
                data: formData
            })
                .then((res) => {
                    localStorage.setItem("ia_user", JSON.stringify(res.data?.token));
                    ToastrService.success('Login successful!');
                    navigate("/login");
                })
                .catch((err) => {
                    const errorMessage = err.response?.data?.message || 'Invalid Registration';
                    ToastrService.error(errorMessage, { autoClose: 5000 });
                });
        }

    };

    const navigatetoLogin = () => {
        navigate("/");
    };
    const navigatetoHome = () => {
        navigate("/home");
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top
      }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img src={logo} className="cur-point" alt="Logo" height={55} onClick={navigatetoHome} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 invisible">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <div>
                                    <b>Eng</b>
                                    <img src={globe} className="img-fluid me-2" alt="Globe" />
                                </div>
                                <button className="btn btn-secondary px-3" type="button" onClick={navigatetoLogin}>BACK</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="col-12 p-0">
                    <div className="signup-body d-flex align-items-center py-4 bg-body-tertiary">
                        <main className="form-signup w-100 m-auto">
                            <form onSubmit={handleRegistration}>
                                <h1 className="mb-3 login-head">Sign Up</h1>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-lg-4 my-auto col-sm-12 text-end">
                                                <label htmlFor="inlineRadio1" className="form-label signin-label">Choose Role:</label>
                                            </div>
                                            <div className="col-lg-8 col-sm-12">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="inlineRadio1"
                                                        value="user"
                                                        checked={selectedOption === 'user'}
                                                        onChange={handleOptionChange}
                                                    />
                                                    <label className="form-check-label signup-text" htmlFor="inlineRadio1">User</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="inlineRadio2"
                                                        value="company"
                                                        checked={selectedOption === 'company'}
                                                        onChange={handleOptionChange}
                                                    />
                                                    <label className="form-check-label signup-text" htmlFor="inlineRadio2">Company</label>
                                                </div>
                                            </div>

                                            {selectedOption === 'user' && (
                                                <div className="col-12 user ">
                                                    <div className="row">
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="countrySelect" className="form-label signin-label">Country/Region:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <select id="countrySelect" className="form-select signup-text user-color" placeholder="Choose Country" defaultValue={""} onChange={(e) => setCountry(e.target.value)}>
                                                                <option value="" disabled>Choose Country</option>
                                                                <option value="1">Africa</option>
                                                                <option value="2">South Africa</option>
                                                                <option value="3">USA</option>
                                                            </select>

                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="fullName" className="form-label signin-label">Full name:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="text" className="form-control signup-text user-color" id="fullName" placeholder="Full name" onInput={(e) => setFullName(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="password" className="form-label signin-label">Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="password" className="form-control signup-text user-color" id="password" placeholder="************" onInput={(e) => validatePassword(e.target.value)} />
                                                            {passwordError && <div className="text-danger">{passwordError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="confirmPassword" className="form-label signin-label">Confirm Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="password" className="form-control signup-text user-color" id="confirmPassword" placeholder="************" onInput={(e) => validateConfirmPassword(e.target.value)} />
                                                            {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="companyEmail" className="form-label signin-label">Verify email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="email" className="form-control signup-text user-color" id="companyEmail" placeholder="name@example.com" onInput={(e) => validateEmail(e.target.value)} />
                                                            {emailError && <div className="text-danger">{emailError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="confirmCompanyEmail" className="form-label signin-label">Confirm email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="email" className="form-control signup-text user-color" id="confirmCompanyEmail" placeholder="name@example.com" onInput={(e) => validateConfirmEmail(e.target.value)} />
                                                            {confirmEmailError && <div className="text-danger">{confirmEmailError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="companyTel" className="form-label signin-label">Tel:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="tel" className="form-control signup-text user-color" id="companyTel" placeholder="+123 4567 8901" onInput={(e) => setTel(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {selectedOption === 'company' && (
                                                <div className="col-12 company">
                                                    <div className="row">
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="countrySelect" className="form-label signin-label">Country/Region:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <select id="countrySelect" className="form-select user-color signup-text" defaultValue={""} onChange={(e) => setCountry(e.target.value)}>
                                                                <option value="">Choose Country</option>
                                                                <option value="1">Africa</option>
                                                                <option value="2">South Africa</option>
                                                                <option value="3">USA</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="cityName" className="form-label signin-label">City Name:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="text" className="form-control signup-text user-color" id="cityName" placeholder="Paris" onInput={(e) => setCityName(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="postCode" className="form-label signin-label">Post Code:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="text" className="form-control signup-text user-color" id="postCode" placeholder="75001" onInput={(e) => setPostCode(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="companyName" className="form-label signin-label">Company Name:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="text" className="form-control signup-text user-color" id="companyName" placeholder="GreenHarvest Farms" onInput={(e) => setCompanyName(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="businessTypeSelect" className="form-label signin-label">Business Type:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <select id="businessTypeSelect" className="form-select signup-text user-color" defaultValue={""} onChange={(e) => setBusinessType(e.target.value)}>
                                                                <option value="">Business Type:</option>
                                                                <option value="1">IT</option>
                                                                <option value="2">Agriculture</option>
                                                                <option value="3">Industry</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="employeeCount" className="form-label signin-label">Number of Employees:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="text" className="form-control signup-text user-color" id="employeeCount" placeholder="200-250" onInput={(e) => setNumberOfEmployees(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="establishmentYear" className="form-label signin-label">Year of Establishment:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="text" className="form-control signup-text user-color" id="establishmentYear" placeholder="2009" onInput={(e) => setYearOfEstablishment(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="password" className="form-label signin-label">Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="password" className="form-control signup-text user-color" id="password" placeholder="************" onInput={(e) => validatePassword(e.target.value)} />
                                                            {passwordError && <div className="text-danger">{passwordError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="confirmPassword" className="form-label signin-label">Confirm Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="password" className="form-control signup-text user-color" id="confirmPassword" placeholder="************" onInput={(e) => validateConfirmPassword(e.target.value)} />
                                                            {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="companyEmail" className="form-label signin-label">Verify email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="email" className="form-control signup-text user-color" id="companyEmail" placeholder="name@example.com" onInput={(e) => validateEmail(e.target.value)} />
                                                            {emailError && <div className="text-danger">{emailError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="confirmCompanyEmail" className="form-label signin-label">Confirm email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="email" className="form-control signup-text user-color" id="confirmCompanyEmail" placeholder="name@example.com" onInput={(e) => validateConfirmEmail(e.target.value)} />
                                                            {confirmEmailError && <div className="text-danger">{confirmEmailError}</div>}
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12 text-end mb-2">
                                                            <label htmlFor="userTel" className="form-label signin-label">Tel:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12 mb-2">
                                                            <input type="tel" className="form-control signup-text user-color" id="userTel" placeholder="+123 4567 8901" onInput={(e) => setTel(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-12 text-center">
                                        <button className="btn py-2 px-5 signup-btn mt-3 w-auto mx-auto" type="submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
