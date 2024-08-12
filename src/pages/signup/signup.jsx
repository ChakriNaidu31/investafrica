import "../signup/signup.css";
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.png";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('company');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const navigatetoLogin= () => {
        navigate("/");
      };
    return (
        <div className="container-fluid">
            <div className="row">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <img src={logo} className="" alt="Logo" height={55} />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 invisible">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <div>
                                    <b>Eng</b>
                                    <img src={globe} className="img-fluid me-2" alt="Globe" />
                                </div>
                                <button class="btn btn-secondary px-3" type="submit" onClick={navigatetoLogin}>Back</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="col-12 p-0">
                    <body class="signup-body d-flex align-items-center py-4 bg-body-tertiary">
                        <main class="form-signup w-100 m-auto">
                            <form>
                                <h1 class="mb-3 login-head">Sign Up</h1>
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-lg-4 my-auto col-sm-12">
                                                    <label for="exampleInputEmail1" class="form-label signin-label">Choose Role:</label>
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
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Country/Region:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <select class="form-select signup-text" aria-label="Default select example">
                                                                    <option selected>Choose Country</option>
                                                                    <option value="1">Africa</option>
                                                                    <option value="2">South Africa</option>
                                                                    <option value="3">USA</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Full name:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="text" class="form-control signup-text " id="exampleFormControlInput1" placeholder="name@example.com" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Password:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="password" class="form-control signup-text" id="exampleFormControlInput1" placeholder="enter password" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Confirm Password:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="password" class="form-control signup-text" id="exampleFormControlInput1" placeholder="enter confirm password" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Verify email address:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="email" class="form-control signup-text" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Confirm email address:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="email" class="form-control signup-text" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Tel:</label>
                                                            </div>
                                                            <div className="col-lg-8  col-sm-12">
                                                                <input type="tel" class="form-control signup-text" id="exampleFormControlInput1" placeholder="+123 4567 8901" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {selectedOption === 'company' && (
                                                    <div className="col-12 company">
                                                        <div className="row">
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Country/Region:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <select class="form-select signup-text" aria-label="Default select example">
                                                                    <option selected>Choose Country</option>
                                                                    <option value="1">Africa</option>
                                                                    <option value="2">South Africa</option>
                                                                    <option value="3">USA</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">City Name:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="text" class="form-control signup-text " id="exampleFormControlInput1" placeholder="Enter City Name" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Post Code:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="text" class="form-control signup-text" id="exampleFormControlInput1" placeholder="Post Code" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Company Name:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="text" class="form-control signup-text" id="exampleFormControlInput1" placeholder="Enter Company Name" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Business Type:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <select class="form-select signup-text" aria-label="Default select example">
                                                                    <option selected>Business Type:</option>
                                                                    <option value="1">IT</option>
                                                                    <option value="2">Agriculture</option>
                                                                    <option value="3">Industry</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Number of Employees:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="text" class="form-control signup-text" id="exampleFormControlInput1" placeholder="Enter Number of Employees" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Year of Establishment:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="text" class="form-control signup-text" id="exampleFormControlInput1" placeholder="Enter Year of Establishment:" />
                                                            </div>

                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Password:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="password" class="form-control signup-text" id="exampleFormControlInput1" placeholder="enter password" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Confirm Password:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="password" class="form-control signup-text" id="exampleFormControlInput1" placeholder="enter confirm password" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Verify email address:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="email" class="form-control signup-text" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Confirm email address:</label>
                                                            </div>
                                                            <div className="col-lg-8 col-sm-12">
                                                                <input type="email" class="form-control signup-text" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                            </div>
                                                            <div className="col-lg-4 my-auto col-sm-12">
                                                                <label for="exampleInputEmail1" class="form-label signin-label">Tel:</label>
                                                            </div>
                                                            <div className="col-lg-8  col-sm-12">
                                                                <input type="tel" class="form-control signup-text" id="exampleFormControlInput1" placeholder="+123 4567 8901" />
                                                            </div>


                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <button class="btn py-2 px-5 signup-btn mt-3 w-auto mx-auto" type="submit">Register</button>

                                </div>
                            </form>

                        </main>
                    </body>
                </div>
            </div>
        </div>
    )
}

export default SignUp;