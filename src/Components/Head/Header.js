import React, {Fragment} from 'react';
import {Navbar} from "./Navbar";
// import RouteNav from "./RouteNav";

const Header = () => {
    return (
        <Fragment>
            <Navbar/> {/*'Blog', 'Photo', 'Bio', 'Shop', 'Contact'*/}
        </Fragment>
    );
};
export default Header;