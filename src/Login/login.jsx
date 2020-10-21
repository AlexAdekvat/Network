import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createField } from '../componenst/common/FormControls/FormsControls';
import { required } from '../Utils/Validators';
import { connect } from 'react-redux';
import { login } from './../Redux/AuthReduser'
import { Redirect } from 'react-router-dom';
import styles from "./../componenst/common/FormControls/FormsControls.module.css";


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div className={styles.wrapper} >
            <div className={styles.word}>
                <p>Чтобы посмотреть и протестировать приложение введите данные тестового аккаунта</p>
                <p>Email: test.social.network@mail.ru</p>
                <p>Password: free</p>
                <div className={styles.login}>
                    <h1>Login</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    {createField("email", "email", Input, [required])}
                    {createField("password", "password", Input, [required], { type: "password" })}
                    {/* {createField(null, "rememberMe", Input, null, { type: "checkbox" }, "Remember me")} */}

                    {captchaUrl && <img src={captchaUrl} />}
                    {captchaUrl && createField("Symbols", "captcha", Input, [required], {})}

                    {error && < div className={styles.formSummaryError} >
                        {error}
                    </div>}
                    <div className={styles.submit}>
                        <button className={styles.btn}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {



    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div  >
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.Auth.captchaUrl,
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);