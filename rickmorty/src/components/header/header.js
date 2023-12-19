import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './header.css'
class Header extends Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <Link to='/'>
                        R & M
                    </Link>
                </h3>

                <ul className="d-flex">
                    <li>
                        <Link to='/characters' >
                            Characters
                        </Link>
                    </li>
                    <li>
                        <Link to='/episodes'>
                            Episodes
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;