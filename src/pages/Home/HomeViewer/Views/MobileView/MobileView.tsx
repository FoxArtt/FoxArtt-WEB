import React, { Component } from 'react'

// Styles imports
import './MobileView.scss'

// Components imports
import HamburgerMenu from './HamburgerMenu'

// Frames imports
import { Card, Col, Container, Row } from 'reactstrap'

// Images imports
import logoHeader
  from '../../../../../assets/images/Logos/FoxArtt-Logo-WEB.svg'
import middleImage
  from '../../../../../assets/images/Home/middleSectionImage.jpg'
import cardMarketingIcon from '../../../../../assets/images/Home/icons/social-media-marketing.svg'
import cardBrandingIcon from '../../../../../assets/images/Home/icons/brand.svg'
import cardMotionIcon from '../../../../../assets/images/Home/icons/motion-graphics.svg'
import cardUIIcon from '../../../../../assets/images/Home/icons/ui.svg'
import cardUXIcon from '../../../../../assets/images/Home/icons/ux.svg'


type props = {};



class MobileView extends Component<props> {

  constructor (props: props) {
    super(props)
    this.state = {
    }
  }



  render (): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="MobileView" data-testid="MobileView">

        {/* INTRODUCTORY SECTION */}
        <Container className="IntroductorySection">

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
        {/* INTRODUCTORY SECTION */}


        {/* MIDDLE SECTION */}
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
        {/* MIDDLE SECTION */}

        <Container className="ServicesSection">
          <div className="containerHeaderTextServices">
            <h4 className="headerTextServices"> FULL SERVICE STUDIO </h4>
            <h1 className="headerTextServices"> Services </h1>
          </div>

          <div className="">

            <div className="containerCards row d-flex justify-content-start">
              {
                [
                  {
                    imageDir: cardMarketingIcon,
                    text: "marketing"
                  },
                  {
                    imageDir: cardBrandingIcon,
                    text: "branding"
                  },
                  {
                    imageDir: cardMotionIcon,
                    text: "motion"
                  },
                  {
                    imageDir: cardUIIcon,
                    text: "ui design"
                  },
                  {
                    imageDir: cardUXIcon,
                    text: "ux design"
                  }
                ].map((object: any, index: number) => (
                    <div className="col-6 my-2">
                      <div className="card-service">
                        <div className="row d-flex justify-content-center mt-4">
                          <img src={object.imageDir}
                               className="icon-card-service"/>
                        </div>
                        <span className="divider-card mt-5">  </span>
                        <p
                          className="text-card-service text-uppercase mt-3"> {object.text} </p>
                      </div>
                    </div>
                ))
              }
            </div>


          </div>

        </Container>

      </div>
    )
  }
}

export default MobileView
