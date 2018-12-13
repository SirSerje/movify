import React, {Component} from 'react';
import style from './Navbar.module.css';
import {Logo} from "./Logo";

/*CLEVER COMPONENT*/
export class Navbar extends Component {
    render() {
        const pages = ['Home', 'Blog', 'Photo', 'Bio', 'Shop', 'Contact'];
        const navLinks = pages.map(page => {
            return (
                <a className={style.link}
                   key={page}
                   href={'/' + page}>{page}
                </a>
            )
        });
        return (
            <nav className={style.navbar}>
                <Logo logoUrl="/"
                      logoImg="https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png"/>
                {navLinks}</nav>
        );
    }
}
