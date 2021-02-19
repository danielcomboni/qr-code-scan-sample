import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerButton = () => <FontAwesomeIcon icon={faBars} />

class Header extends Component {
    state = {
        sticky: '',
        role: {
            roleName: 'CSO',
            userName: 'David Pereira',
            userNameInitials: 'DP',
            displayUserNameAndRole: ''
        }
    }
    handleStickyHeader = () => {
        const elementId = "topnav";
        if (document.getElementById(elementId)) {
            const header = document.getElementById(elementId)!;
            let sticky = header.offsetTop!;
            if (window.pageYOffset > sticky) {
                this.setState({ sticky: 'sticky' })
                header.classList.add(this.state.sticky);
            } else {
                this.setState({ sticky: '' })
                header.classList.remove("sticky");
            }
        }
    }

    componentDidMount() {
        this.handleStickyHeader();
        // this is handled only once...upon mounting
        this.handleRoleAndUserNameDisplay();
        // upon resizing screen
        window.addEventListener('resize', this.handleRoleAndUserNameDisplay)
    }

    handleHamburgerButton = () => {

        let element = document.getElementById("topnav")!;
        element.className === "topnav" ? element.className = element.className + " responsive" : element.className = "topnav";

        let sidebar = document.getElementById("sidebar")!;
        sidebar.className === "sidebar" ? sidebar.className = sidebar.className + " responsive" : sidebar.className = "sidebar";

    }

    handleRoleAndUserNameDisplay = (): string => {
        if (window.matchMedia("(max-width: 700px)").matches) {
            this.setState({ role: { ...this.state.role, displayUserNameAndRole: this.state.role.userNameInitials + ` (${this.state.role.roleName})` } })
            return this.state.role.displayUserNameAndRole
        } else {
            this.setState({ role: { ...this.state.role, displayUserNameAndRole: this.state.role.userName + ` (${this.state.role.roleName})` } })
            return this.state.role.displayUserNameAndRole
        }
    }

    render() {

        return (

            <div className="topnav" id="topnav" role="navigation" onLoad={this.handleStickyHeader}>
                <a className="active brand-name" href="#home">Auto Data Capture solution</a>
                <a className="username" href="#user" >{this.state.role.displayUserNameAndRole}</a>
                <a href="#/" className="icon" id="toggle-btn" onClick={this.handleHamburgerButton}
                ><i><HamburgerButton /></i
                ></a>
            </div>

        )
    }
}

export default Header