import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch ,useSelector} from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    //desestructuramos
    const { email, password } = formValues;

    const loading = useSelector( state => state.ui );

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password))
        console.log(email, password);

    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
        console.log( dispatch( startGoogleLogin() ))
    }

    return (
        <>
            <h3 className="auth__title">Iniciar sección</h3>
            <form onSubmit={handleLogin}>

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


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    //disabled ={loading}
                >
                    Acceder
                </button>


                <div className="auth__social-networks">
                    <p>Inicia sección con:</p>

                    <div
                        className="google-btn btn-primary"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Ingresar con Google</b>
                        </p>
                    </div>

                    <div
                        className="google-btn btn-primary"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://image.flaticon.com/icons/png/512/20/20673.png" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Ingresar con Facebook</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Crear nueva cuenta
                </Link>

            </form>
        </>
    )
}
