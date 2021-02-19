import React, { Component, ReactNode } from 'react'
import AppRouter from '../../router';
import KeyValueMap, { IKeyValueMap } from '../../Utils/collections/Map';

import { Link } from "react-router-dom";

import './sidebar.css'

export interface ISidebarState {
    sidebarItems: IKeyValueMap<string, string>
}

let navs = new KeyValueMap<string, string>();
navs.put('applications', 'Applications');
navs.put('scan', 'Scan QR code');

const sidebarItems: ISidebarState = {
    sidebarItems: navs
}



class Sidebar extends Component<{}, ISidebarState> {

    state: ISidebarState = {
        sidebarItems: sidebarItems.sidebarItems
    }

    handleHamburgerButton = () => {

        let element = document.getElementById("sidebar")!;
        element.className === "sidebar" ? element.className = element.className + " responsive" : element.className = "sidebar";

    }

    styleLink = (): string => {
        return `textDecoration: 'none', display: 'block', color: 'whitesmoke', padding: '16px', overflowWrap: 'break-word'`
    }
    componentDidMount() {

    }

    render() {
        return (

            <div className="sidebar" id="sidebar">

                <nav className="nav">
                    <ul>
                        <li>
                            <Link className="link" to="/" style={{  }} >Applications</Link>
                        </li>
                        
                        <li>
                            <Link className="link" to="/scan">Scan QR code</Link>
                        </li>

                    </ul>
                </nav>

            </div>


        )
    }
}

export default Sidebar;