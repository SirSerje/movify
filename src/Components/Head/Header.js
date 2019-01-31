import React from 'react';
import {Navbar} from "./Navbar";
import {LoginForm} from "../Login/LoginForm";

const Header = () => (
        <>
            <Navbar/> {/*['Blog', 'Bio', 'Shop', 'Contact']*/}
            <LoginForm/>
        </>
    );

export default Header;