import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'
import './Login.css'
const Login = () => {
    const { signinWithGoogle, handleEmailSignin, signinWithGithub, handlePasswordChange, processLogin } = useAuth()


    return (
        <>
            <div className="container overflow-hidden">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border bg-light input-field">
                            <h2>Please Login</h2>
                            <input required type="email" placeholder='Enter Email' onChange={handleEmailSignin} />
                            <br />
                            <input required type="password" placeholder='Enter Password' onChange={handlePasswordChange} />
                            <br />
                            <button onClick={processLogin} className='btn btn-primary '>LogIn</button>
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

                        </div>

                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <img className='w-75' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
