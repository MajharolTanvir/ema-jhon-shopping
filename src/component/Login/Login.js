import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import useValidation from '../../hooks/useValidation';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../init.firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const { validated } = useValidation('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })
    }
    if (loginLoading) {
        <p>Loading...</p>
    }


    return (
        <div className='my-5 mx-auto'>
            <div className='py-4 mx-5'>
                <h2 className='text-center my-3'>Login now</h2>
                <div>
                    <Form noValidate validated={validated} className='container w-50 border border-primary p-5 rounded-3' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" name='email' placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please choose input a email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" name='password' placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a Password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <p>
                            Create new account <Link to='/registration'>Registration</Link>
                        </p>
                        {loginError ? <p style={{ color: 'red' }}>{loginError.message}</p> : ''}
                        <Button variant="primary" type="submit">
                            Login here
                        </Button>
                    </Form>
                </div>
            </div>
        </div >
    );
};

export default Login;