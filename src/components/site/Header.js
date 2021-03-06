import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Header = () => {
    return(
    <header>
        <Navbar className='header'>
        <Nav className = 'ml-auto' navbar>
            <NavItem>
                <NavLink href ='https://github.com/Mariabruner/Intro_to_react'>
                    GitHub
                </NavLink>
            </NavItem>
        </Nav>
        </Navbar>
    </header>
    )
}

export default Header