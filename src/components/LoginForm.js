import React, {useEffect} from 'react';
import { Formik } from 'formik';
import { Form, Alert } from 'react-bootstrap';
import style from '../CSS/LoginForm.module.css'
import wave from './Wave.svg';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LoginForm = (props) => {
 
    return (
        <div className={style.main}>
            <img alt='background' src={wave}></img>
            <div className={style.formWrapper}>
                <h2>Welcome to the SUPERHERO API!</h2>
                <Formik
                    onSubmit={(values) => {
                        let email = values.username;
                        let password = values.password
                        const data = JSON.stringify({
                             email,
                             password
                        });     
                        console.log(data)
                       axios.post('http://challenge-react.alkemy.org/', data, {
                        "headers": {         
                        "content-type": "application/json",                        
                        },})
                       .then(results => {
                           const {token} = results.data
                        localStorage.setItem("token", token)
                        console.log(localStorage.getItem('token'));
                       props.history.push("/home")
                       }).catch(error => alert('Las credenciales ingresadas no son validas'))
                    }}

                    initialValues={{
                        username: '',
                        password: ''
                    }}

                    validate={(values) => {
                        let errors = {}
                        if (!values.username) {
                            errors.username = 'Por favor ingrese un nombre.'
                        } else if (!values.password) {
                            errors.password = 'Por favor ingrese una contraseña.'
                        }
                        return errors
                    }

                    }
                >
                    {({ handleSubmit, values, handleChange, handleBlur, errors }) => (
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label className={style.label}>E-mail</Form.Label>
                                <Form.Control
                                    className={style.input}
                                    type='email'
                                    label='username'
                                    name='username'
                                    placeholder='user@example.com'
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </Form.Control>
                                {errors.username && <Alert className={style.alerts} variant='dark'>
                                    {errors.username}
                                </Alert>}
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className={style.label}>Contraseña</Form.Label>
                                <Form.Control
                                    className={style.input}
                                    type='password'
                                    label='password'
                                    name='password'
                                    placeholder='Password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </Form.Control>
                                {errors.password && <div ><Alert className={style.alerts} variant='dark'>
                                    {errors.password}
                                </Alert></div>}
                            </Form.Group>
                            <button type ='submit' className="btn btn-primary btn-dark">Log In</button>
                        </Form>)}
                </Formik>
            </div>
        </div>
    )
}

export default LoginForm














// import React, { Component } from 'react'
// import {Formik} from 'formik';

// export default class LoginForm extends Component {

//     state = {
//         username: "",
//         password: "",
//         isLoading: false,
//         error: {
//             status: false,
//             message: ""
//         },
//         success: false
//     };

//     render() {

//         const { username, password, error, isLoading, success } = this.state


//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type='text'
//                         label='username'
//                         name='username'
//                         placeholder='User'
//                         value={username}
//                         onKeyDown={this.handleKeyPressed}
//                         onChange={this.handleInputChange}>
//                     </input>
//                     <input type='password'
//                         label='password'
//                         name='password'
//                         placeholder='Password'
//                         value={password}
//                         onKeyDown={this.handleKeyPressed}
//                         onChange={this.handleInputChange}>
//                     </input>
//                 </form>
//             </div>
//         )
//     }
// }
