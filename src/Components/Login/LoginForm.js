import React, {Component} from 'react'
import style from '../../css/Login.module.css'

const isLogged = false;

export class LoginForm extends Component {
    render() {
        return (
            <>
                <section className={style.wrapper}>
                    <form action="#"
                          method="POST"
                          className={style.form}
                    >
                        <label>Ваше имя:</label>
                        <input type="text"
                               placeholder="Enter Username"
                               name="username"
                               id="username"
                        />

                        <label>Email:</label>
                        <input type="text"
                               placeholder="Enter Email"
                               name="email"
                               id="email"
                        />

                        <label>Password:</label>
                        <input type="password"
                               placeholder="Enter Password"
                               name="psw"
                               id="psw"
                               size="15"
                        />

                        {!isLogged ?
                            <button type="submit">Log In</button>
                            :
                            <button type="submit">Log Out</button>
                        }
                    </form>
                </section>
            </>
        );
    }
}