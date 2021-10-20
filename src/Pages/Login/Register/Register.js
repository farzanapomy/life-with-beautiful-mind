import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'


const Register = () => {
    const { signinWithGoogle, handleEmailSignin, signinWithGithub, handlePasswordChange, handleRegister, error,handleName } = useAuth();

    return (
        <div>

            <div className="container overflow-hidden">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border bg-light input-field">
                            <h2>Please Register</h2>
                            <form action="" onSubmit={handleRegister}>
                                <input required type="text" name='name' onBlur={handleName} id='displayName' placeholder='Enter 
                                Name' />
                                <input required type="email" name='email' placeholder='Enter Email' onBlur={handleEmailSignin} />
                                <br />
                                <input required type="password" placeholder='Enter Password' onBlur={handlePasswordChange} />
                                <p className='text-danger'>{error}</p>
                                <br />
                                <input type="submit" value="Register" className='btn btn-primary' />
                                <br />
                                <br />
                                <div className='signin-button'>
                                    <button onClick={signinWithGoogle}><i className="fab fa-google "></i>  Sign in with Google</button>

                                    <button onClick={signinWithGithub}><i className="fab fa-github-square"></i>  Sign in with Github</button>
                                </div>
                                <div>
                                    <Link to='/register'> <p>Are you new then please Register</p></Link>
                                    <Link to='/login'> <p>Already have an account?</p></Link>
                                </div>
                            </form>

                        </div>

                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img className='w-75' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Register;