import React, { Component } from 'react'

// Styles imports
import './MobileView.scss'

// Components imports
import HamburgerMenu from './HamburgerMenu'

// Frames imports
import { Col, Container, Row } from 'reactstrap'

// Images imports
import logoHeader
  from '../../../../../assets/images/Logos/FoxArtt-Logo-WEB.svg'
import middleImage
  from '../../../../../assets/images/Home/middleSectionImage.jpg'

type props = {};
type state = {};

class MobileView extends Component<props, state> {
  constructor (props: props) {
    super(props)
    this.state = {}
  }

  render (): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="MobileView" data-testid="MobileView">
        <Container>

          {/* Logo and HamburgerMenu */}
          <Row className="d-flex justify-content-center">
            <Col xs={{ size: 11 }} className="mt-4">
              <Row className="d-flex justify-content-between">
                <img src={logoHeader} className="LogoHeader"/>
                <HamburgerMenu/>
              </Row>
            </Col>
          </Row>
          {/* Logo and HamburgerMenu */}
        </Container>

        <Container>

          <Row className="d-flex justify-content-center">


            <Col xs={{ size: 11 }} className="mt-1 MainBannerImage">
            </Col>

            <Col xs={{ size: 11 }} className="IntroductoryText my-4 text-left">
              <h3 className="IntroductoryTitle"> FoxArtt </h3>
              <p className="IntroductoryParagraph mt-2"> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dignissimos eveniet nam nisi
                quo rem suscipit tempore velit. Alias, obcaecati, quisquam. </p>
              <a href="#" className="buttonLearnMore"> Learn More </a>
            </Col>
          </Row>
        </Container>


        <Container className="middleSection">
          <Container fluid className="ContainerMiddleSection">
            <div className="backgroundContainer">
              <img src={middleImage} width="100%"
                   className="ImageContainerMiddle"/>

              <div className="InformativeMiddleSection">

              </div>

              <div>
              </div>
            </div>

          </Container>
            
        </Container>

      </div>
    )
  }
}

export default MobileView