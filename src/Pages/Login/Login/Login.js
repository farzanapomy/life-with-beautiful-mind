import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signinWithGoogle, handleCheckBox, isLoging } = useAuth()
    return (
        <>
            <h2>{

                isLoging ? 'Please Login' : 'Please Register' 

            }</h2>
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
