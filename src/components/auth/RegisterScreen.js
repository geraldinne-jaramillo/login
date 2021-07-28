import React from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/uiError'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'



export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Silvia',
        email: 'garcia@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues

    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.ui);
    console.log(msjError)

 
    const formValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('nombre requerido'))
            return false
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError('Emial requerido'))
            return false
        }
        else if (password !== password2 || password < 5) {
            dispatch(setError('La contraseña es incorecta'))
            return false
        }

        dispatch(removeError(''))
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    return (
        <>
            <h3 className="auth__title">Registarse</h3>

            <form onSubmit={handleRegister} >

                {
                    msjError &&
                    (
                        <div className="auth__alert-error">
                            { msjError}
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"

                >
                    Registrar
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    ¿Ya estás registrado?
                </Link>

            </form>
        </>
    )
}
