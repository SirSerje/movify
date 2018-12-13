import React, {Fragment, Component} from 'react'

const isLogged = Math.random() < 0.5;

export class LoginForm extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <form action="#"
                          method="POST"
                    >
                        <label>Ваше имя:</label>
                        <input type="text"
                               placeholder="Enter Username"
                               name="username"
                               id="username"/>

                        <label>Email:</label>
                        <input type="text"
                               placeholder="Enter Email"
                               name="email"
                               id="email"/>

                        <label>Password:</label>
                        <input type="password"
                               placeholder="Enter Password"
                               name="psw"
                               id="psw"
                               size="15"/>

                        {!isLogged ?
                            <button type="submit">Log In</button>
                            :
                            <button type="submit">Log Out</button>
                        }
                    </form>
                </section>
            </Fragment>
        );
    }
}