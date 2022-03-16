import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './Navbar.css'

const Navbar = () => {
  return (

    <header>
      <div className='headerComputer'>
          <div>
          <NavLink className='pageTitle'to ="/">CARSHOP</NavLink>
          </div>
          <div className='itemsContainers'>
              {/* <a className="link" aria-current="page" >SUV</a> */}
              <a className="link" aria-current="page" >SEDAN</a>
              <a className="link" aria-current="page" >DEPORTIVO</a>
              <a className="link" aria-current="page" >HATCHBACK</a>
              <a className="link" aria-current="page" >PICKUP</a>
          </div>

      <NavLink to ="cart">
      <img className='fotoCarro' src="https://gogeticons.com/frontend/web/icons/data/7/3/9/2/1/shopping%20cart_512.png"/>

      </NavLink>
      </div>

      {/* <div className=''>
            <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </div> */}


    </header>

  )
}

export default Navbar;