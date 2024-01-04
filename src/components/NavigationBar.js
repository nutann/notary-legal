import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function NavigationBar() {
return (
<Navbar bg="dark" expand="lg" variant="dark">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<LinkContainer to="/">
<Nav.Link>Home</Nav.Link>
</LinkContainer>
<LinkContainer to="/Services">
<Nav.Link>Services</Nav.Link>
</LinkContainer>
</Nav>
</Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;