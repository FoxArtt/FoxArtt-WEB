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
import cardMarketingIcon
  from '../../../../../assets/images/Home/icons/social-media-marketing.svg'
import cardBrandingIcon from '../../../../../assets/images/Home/icons/brand.svg'
import cardMotionIcon
  from '../../../../../assets/images/Home/icons/motion-graphics.svg'
import cardUIIcon from '../../../../../assets/images/Home/icons/ui.svg'
import cardUXIcon from '../../../../../assets/images/Home/icons/ux.svg'
import aboutUsImage from '../../../../../assets/images/Home/AboutUsImage.jpg';

type props = {};

class MobileView extends Component<props> {

  constructor (props: props) {
    super(props)
    this.state = {}
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
                <img src={logoHeader} className="LogoHeader" alt=''/>
                <HamburgerMenu/>
              </Row>
            </Col>
          </Row>
          {/* /Logo and HamburgerMenu */}
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
        {/* /INTRODUCTORY SECTION */}


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
        {/* /MIDDLE SECTION */}

        {/* SERVICES SECTION */}
        <Container className="ServicesSection mb-5">
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
                    text: 'marketing',
                  },
                  {
                    imageDir: cardBrandingIcon,
                    text: 'branding',
                  },
                  {
                    imageDir: cardMotionIcon,
                    text: 'motion',
                  },
                  {
                    imageDir: cardUIIcon,
                    text: 'ui design',
                  },
                  {
                    imageDir: cardUXIcon,
                    text: 'ux design',
                  },
                ].map((object: any, index: number) => (
                  <div className="col-6 my-2" key={index}>
                    <div className="card-service">
                      <div className="row d-flex justify-content-center mt-4">
                        <img src={object.imageDir}
                             className="icon-card-service"/>
                      </div>
                      <span className="divider divider-card mt-5">  </span>
                      <p
                        className="text-card-service text-uppercase mt-3"> {object.text} </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </Container>
        {/* /SERVICES SECTION */}

        {/* SECTION ABOUT US */}
        <Container className="AboutUsSection py-5">
          <div className="containerAboutUsSection">

            <div className="TextHeaderAboutUsSection">
              <h5 className="text-one"> Lorem ipsum dolor. </h5>
              <h3 className="text-two"> Acerca de nosotros </h3>
            </div>

            <div className="TextMiddleAboutUsSection mt-5 mb-3">
              <p className="text-left">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores delectus dolores est facere non quo, quod veritatis.
                Debitis distinctio dolorem id libero nisi odit reprehenderit? Ex
                maiores maxime nisi optio?

              </p>

              <p className="text-left">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores delectus dolores est facere non quo, quod veritatis.
                Debitis distinctio dolorem id libero nisi odit reprehenderit? Ex
                maiores maxime nisi optio?

              </p>

              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores delectus dolores est facere non quo, quod veritatis.
                Debitis distinctio dolorem id libero nisi odit reprehenderit? Ex
                maiores maxime nisi optio?
              </p>


              <span className="divider divider-aboutus">  </span>
            </div>


            <a href="#" className="buttonAboutUs text-uppercase font-weight-bold"> Contactanos  </a>

            <img src={aboutUsImage} alt="" width="100%" className="mt-4"/>

          </div>
        </Container>
        {/* /SECTION ABOUT US */}


      </div>
    )
  }
}

export default MobileView
