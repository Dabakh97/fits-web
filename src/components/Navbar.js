import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../image/immo.png'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand='xl' bg='with' variant='with'>
      <Container>
        <Row>
          <Col>
            <Navbar.Brand href='#home'>
              <a href='/'>
                <img src={logo} alt='logo' className='logo'/>
              </a>
            </Navbar.Brand>
          </Col>
        </Row>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Row>
            <Col>
              <Nav>
                <Nav.Link href='#features'>Features</Nav.Link>
                <Nav.Link href='#pricing'>Pricing</Nav.Link>
                <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav>
                <Nav.Link href='#deets'>More deets</Nav.Link>
                <Nav.Link eventKey={2} href='#memes'>
                  Dank memes
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CollapsibleExample
