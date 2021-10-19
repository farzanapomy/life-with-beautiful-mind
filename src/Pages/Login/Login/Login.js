import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'
import './Login.css'
const Login = () => {
    const { signinWithGoogle, handleCheckBox, isLoging,handleEmailSignin,signinWithGithub ,handlePasswordChnage} = useAuth()
    return (
        <>
            <h2>{

                isLoging ? 'Please Login' : 'Please Register'

            }</h2>

            <div className="container overflow-hidden">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border bg-light input-field">
                            <h2>Please Login</h2>
                            <input required type="text" placeholder='Enter Email' onChange={handleEmailSignin}/>
                            <br />
                            <input required type="password" placeholder='Enter Password'  onChange={handlePasswordChnage}/>
                            <br />
                            <button className='btn btn-primary '>LogIn</button>
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
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <img className='w-75' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>














            <Form className='mx-auto container w-75 my-5'>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label >Enter Your Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3 text-start " controlId="formBasicPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" />
                </Form.Group>


                <div className="form-check">
                    <input onChange={handleCheckBox} className="form-check-input" type="checkbox" id="gridCheck1" />
                    <h6 className='text-start'>Already registered ?</h6>
                </div>

                <button className='btn btn-warning my-3'>Submit</button>
                <br />
                <div>
                    --------------OR-------------
                </div>
                <button className='btn btn-warning my-3' onClick={signinWithGoogle}>Sign in with Google</button>

            </Form>
        </>
    );
};

export default Login;
