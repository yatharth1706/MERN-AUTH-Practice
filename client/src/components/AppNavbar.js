import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap'

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color = "dark" dark expand="sm" className = "mb-5">
                <Container>
                    <NavbarBrand href = "/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick = {toggle}/>
                    <Collapse isOpen = {isOpen} navbar>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                                <NavLink href = "https://github.com/yatharth1706/">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;