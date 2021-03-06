import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'
import './Login.css'
const Login = () => {
    const { signinWithGoogle, handleEmailSignin, signinWithGithub, handlePasswordChange, handleLogin, handleResetPass } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location?.state?.from || '/services'

    console.log('from', location?.state?.from)

    const handleGoogleButton = (e) => {
        signinWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            // e.target.reset()
    }




    return (
        <>
            <div className="container overflow-hidden my-5">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border bg-light input-field">
                            <h2>Please Login</h2>
                            <form action="" onSubmit={handleLogin}>
                                <input required type="email" name='email' placeholder='Enter Email' onBlur={handleEmailSignin} />
                                <br />
                                <input required type="password" placeholder='Enter Password' onBlur={handlePasswordChange} />
                                <br />
                                <input type="submit" value="Login" className='btn btn-primary' />
                                <br />
                                <br />
                                <div className='signin-button'>
                                    <button onClick={handleGoogleButton}><i className="fab fa-google "></i>  Sign in with Google</button>

                                    <button onClick={signinWithGithub}><i className="fab fa-github-square"></i>  Sign in with Github</button>
                                    <button onClick={handleResetPass}>Reset PassWord</button>
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

        </>
    );
};

export default Login;
