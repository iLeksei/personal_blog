import React, {ReactElement} from "react";
import {Link} from "react-router-dom";

import {RoutesEnum} from "../../enums/RoutesEnum";

import "./Heading.css";

export const Heading = (): ReactElement => {
    return (
        <header className="heading__container">
            <div className="heading__author-name">
                <Link to={RoutesEnum.HOME}><h4 className="heading__author-name">Alex Zhuravlev</h4></Link>
            </div>
            <nav className="heading__navigator">
                <ul aria-roledescription="tablist">
                    <li><Link to={RoutesEnum.HOME}>HOME</Link></li>
                    <li><Link to={RoutesEnum.BLOG}>BLOG</Link></li>
                    <li><Link to={RoutesEnum.PICTURES}>PICTURES</Link></li>
                </ul>
            </nav>
        </header>
    );
}