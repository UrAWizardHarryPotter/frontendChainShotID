import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import AboutMe from './components/AboutMe.jsx';
import BlogPosts from './components/BlogPosts.jsx';
import MediaList from './components/MediaList.jsx';
import MediaCarousel from './components/MediaCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick(page) {
    this.setState({
      [page]: !this.state[page]
    })
  }

  render () {
    return (
  <div>
    <Container fluid="xl">
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand href="#home">
          <h1>
          <strong style={{fontFamily: 'Quattrocento', fontSize: '3.12rem'}}>The Long Run</strong><p></p>
          <div style={{fontFamily: 'Quattrocento', fontSize: '1.5rem'}}>By Zach Schwartzman</div>
          </h1>
        </Navbar.Brand>
      </Navbar>
      <Row >
        <Col style={{fontFamily: 'Buenard', fontSize: '1.25rem'}}>
        <p></p>
        {/* <em> */}
          Zach is a software engineer, an Internet Analyst, and an early-stage investor across the Crypto and Consumer Internet space. He enjoys sharing analysis of the finance and technology industries from his five years of experience as a Research Analyst on Wall Street. Zach is currently working on a project related to individual ownership of data, wealth and identity on the Internet. If you share a similar vision, he'd love to grab coffee over Zoom.
        {/* </em> */}
        </Col>
      </Row>
      <p></p>
      <Row>
        <Col style={{fontFamily: 'Quattrocento'}}>
          <MediaCarousel/>
        </Col>
      </Row>
      <p></p>
      <Row>
        <Col style={{fontFamily: 'Quattrocento'}}>
          <BlogPosts />
        </Col>
      </Row>
      <p></p>
      <Row>
        <Col style={{fontFamily: 'Quattrocento'}}>
          <h3> Select Published Research </h3>
          <Button variant="link" target="_blank" href="https://rbcpublishedresearch.s3-us-west-1.amazonaws.com/2020+Outlook+12232019.pdf">2020 U.S. Internet Sector Outlook - December 23, 2019</Button>
          <p></p>
          <Button variant="link" target="_blank" href="https://rbcpublishedresearch.s3-us-west-1.amazonaws.com/Libra%2C+China's+CBDC%2C+%26+Messaging+Apps.pdf">Crypto Chronicles, Vol. III: Libra, China's CBDC, & Messaging Apps - October 15, 2019</Button>
          <p></p>
          <Button variant="link" target="_blank" href="https://rbcpublishedresearch.s3-us-west-1.amazonaws.com/Web3+Summit+Takeaways.pdf">Crypto Chronicles, Vol. II: Web3 Summit Takeaways - August 21, 2019</Button>
          <p></p>
          <Button variant="link" target="_blank" href="https://rbcpublishedresearch.s3-us-west-1.amazonaws.com/State+of+the+Internet_Privacy%2C+Regulation+%26+Crypto.pdf">State of the Internet: Privacy, Regulation & Crypto - May 15, 2019</Button>
          <p></p>
          <Button variant="link" target="_blank" href="https://rbcpublishedresearch.s3-us-west-1.amazonaws.com/Chocolate%2C+Swiss+Cheese+%26+Cryptocurrency.pdf">Chocolate, Swiss Cheese & Cryptocurrency - July 20, 2018</Button>
          <p></p>
        </Col>
      </Row>
      <p></p>
      <Row>
        <Col style={{fontFamily: 'Quattrocento'}}>
          <MediaList />
        </Col>
      </Row>
      <p></p>
      <Row style={{fontFamily: 'Quattrocento'}}>
        <Col>
          <AboutMe />
        </Col>
      </Row>
    </Container>
  </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));