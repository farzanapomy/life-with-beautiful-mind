import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'


const Register = () => {
    const { signinWithGoogle, handleEmailSignin, signinWithGithub, handlePasswordChnage ,handleRegsiter} = useAuth()
    return (
        <div>

            <div className="container overflow-hidden">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border bg-light input-field">
                            <h2>Please Login</h2>
                            <input required type="text" placeholder='Enter Email' onChange={handleEmailSignin} />
                            <br />
                            <input required type="password" placeholder='Enter Password' onChange={handlePasswordChnage} />
                            <br />
                            <button onSubmit={handleRegsiter} className='btn btn-primary '>Register</button>
                            <br />
                            <br />
                            <div className='signin-button'>
                                <button onClick={signinWithGoogle}><i className="fab fa-google "></i>  Sign in with Google</button>

                                <button onClick={signinWithGithub}><i className="fab fa-github-square"></i>  Sign in with Github</button>
                            </div>
                            <div>
                                <p>Are you new then please Login</p>
                                <p>Already have an account?</p>
                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img className='w-75' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;