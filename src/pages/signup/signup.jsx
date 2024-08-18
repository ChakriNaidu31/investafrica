import "../signup/signup.css";
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.png";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {

    // TODO: Design not matching with Figma. All labels should be right aligned as per Figma.
    // TODO: Choose country default text color not matching with Figma.
    // TODO: Value in password and confirm password fields should match. If not, show error under confirm password field
    // TODO: Value in email and confirm email fields should match. If not, show error under confirm email field
    // TODO: Add validation for password field to check minimum 8 characters (At least 1 uppercase, 1 lowercase, 1 digit and 1 symbol)


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
    const [tel, setTel] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("role", selectedOption);
        formData.append("country", country);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("emailAddress", emailAddress);
        formData.append("tel", tel);

        if (selectedOption === 'user') {
            formData.append("companyName", fullName);
        } else if (selectedOption === 'company') {
            formData.append("cityName", cityName);
            formData.append("postCode", postCode);
            formData.append("companyName", companyName);
            formData.append("businessType", businessType);
            formData.append("numberOfEmployees", numberOfEmployees);
            formData.append("yearOfEstablishment", yearOfEstablishment);
        }

        axios({
            url: `http://localhost:3001/user/register`,
            method: "POST",
            data: formData
        })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("ia_user", JSON.stringify(res.data));
                navigate("/home");
            })
            .catch((err) => {
                // TODO: Handle error
                console.log(err);
            });
    };

    const validatePassword = (plainPassword) => {
        setConfirmPassword(plainPassword);
    }

    const validateEmail = (plainEmail) => {
        //TODO:
    }

    const navigatetoLogin = () => {
        navigate("/");
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img src={logo} className="" alt="Logo" height={55} />
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
                                            <div className="col-lg-4 my-auto col-sm-12">
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
                                                <div className="col-12 user">
                                                    <div className="row">
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="countrySelect" className="form-label signin-label">Country/Region:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <select id="countrySelect" className="form-select signup-text" defaultValue={""} onChange={(e) => setCountry(e.target.value)}>
                                                                <option value="">Choose Country</option>
                                                                <option value="1">Africa</option>
                                                                <option value="2">South Africa</option>
                                                                <option value="3">USA</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="fullName" className="form-label signin-label">Full name:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="text" className="form-control signup-text" id="fullName" placeholder="John Doe" onInput={(e) => setFullName(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="userPassword" className="form-label signin-label">Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="password" className="form-control signup-text" id="userPassword" placeholder="************" onInput={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="confirmPassword" className="form-label signin-label">Confirm Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="password" className="form-control signup-text" id="confirmPassword" placeholder="************" onInput={(e) => validatePassword(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="emailAddress" className="form-label signin-label">Verify email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="email" className="form-control signup-text" id="emailAddress" placeholder="name@example.com" onInput={(e) => setEmailAddress(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="confirmEmailAddress" className="form-label signin-label">Confirm email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="email" className="form-control signup-text" id="confirmEmailAddress" placeholder="name@example.com" onInput={(e) => validateEmail(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="telephoneNumber" className="form-label signin-label">Tel:</label>
                                                        </div>
                                                        <div className="col-lg-8  col-sm-12">
                                                            <input type="tel" className="form-control signup-text" id="telephoneNumber" placeholder="+123 4567 8901" onInput={(e) => setTel(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {selectedOption === 'company' && (
                                                <div className="col-12 company">
                                                    <div className="row">
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="countrySelect" className="form-label signin-label">Country/Region:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <select id="countrySelect" className="form-select signup-text" defaultValue={""} onChange={(e) => setCountry(e.target.value)}>
                                                                <option value="">Choose Country</option>
                                                                <option value="1">Africa</option>
                                                                <option value="2">South Africa</option>
                                                                <option value="3">USA</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="cityName" className="form-label signin-label">City Name:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="text" className="form-control signup-text " id="cityName" placeholder="Paris" onInput={(e) => setCityName(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="postCode" className="form-label signin-label">Post Code:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="text" className="form-control signup-text" id="postCode" placeholder="75001" onInput={(e) => setPostCode(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="companyName" className="form-label signin-label">Company Name:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="text" className="form-control signup-text" id="companyName" placeholder="GreenHarvest Farms" onInput={(e) => setCompanyName(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="businessTypeSelect" className="form-label signin-label">Business Type:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <select id="businessTypeSelect" className="form-select signup-text" defaultValue={""} onChange={(e) => setBusinessType(e.target.value)}>
                                                                <option value="">Business Type:</option>
                                                                <option value="1">IT</option>
                                                                <option value="2">Agriculture</option>
                                                                <option value="3">Industry</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="employeeCount" className="form-label signin-label">Number of Employees:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="text" className="form-control signup-text" id="employeeCount" placeholder="200-250" onInput={(e) => setNumberOfEmployees(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="establishmentYear" className="form-label signin-label">Year of Establishment:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="text" className="form-control signup-text" id="establishmentYear" placeholder="2009" onInput={(e) => setYearOfEstablishment(e.target.value)} />
                                                        </div>

                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="userPassword" className="form-label signin-label">Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="password" className="form-control signup-text" id="userPassword" placeholder="************" onInput={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="confirmPassword" className="form-label signin-label">Confirm Password:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="password" className="form-control signup-text" id="confirmPassword" placeholder="************" onInput={(e) => validatePassword(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="emailAddress" className="form-label signin-label">Verify email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="email" className="form-control signup-text" id="emailAddress" placeholder="company@example.com" onInput={(e) => setEmailAddress(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="confirmEmailAddress" className="form-label signin-label">Confirm email address:</label>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <input type="email" className="form-control signup-text" id="confirmEmailAddress" placeholder="name@example.com" onInput={(e) => validateEmail(e.target.value)} />
                                                        </div>
                                                        <div className="col-lg-4 my-auto col-sm-12">
                                                            <label htmlFor="userTel" className="form-label signin-label">Tel:</label>
                                                        </div>
                                                        <div className="col-lg-8  col-sm-12">
                                                            <input type="tel" className="form-control signup-text" id="userTel" placeholder="+123 4567 8901" onInput={(e) => setTel(e.target.value)} />
                                                        </div>


                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button className="btn py-2 px-5 signup-btn mt-3 w-auto mx-auto" type="submit">Register</button>
                                </div>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;