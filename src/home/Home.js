import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

import { Jumbotron, Container } from "reactstrap";
import CardWithTitle from "../share/components/CardWithTitle";

const items = [
  {
    src:
      "https://assets.publicis.sapient.com/content/dam/publicis-sapient/images/about/landing/about-thumb4.jpg",
    caption: "Imperative"
  },
  {
    src:
      "https://assets.publicis.sapient.com/content/dam/publicis-sapient/images/about/landing/about-thumb1.jpg",
    caption: "Digital Core"
  },
  {
    src:
      "https://assets.publicis.sapient.com/content/dam/publicis-sapient/images/about/landing/about-thumb9.jpg",
    caption: "The Future"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const divStyle = {
      marginTop: "20px"
    };

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <div style={divStyle}>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">The Transformation Imperative</h1>
              <p className="lead">
                We have entered a new wave of business transformation where the
                goal is to both drive growth & improve operating efficiency, all
                while simultaneously rethinking how businesses operate. This
                transformation imperative, often referred to as digital
                transformation, is the result of 3 interrelated forces
              </p>
            </Container>
          </Jumbotron>
        </div>
        <div style={divStyle}>
          <Row>
            <Col sm="3">
              <Card body>
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next}
                  />
                </Carousel>
              </Card>
            </Col>
            <Col sm="9">
              <CardWithTitle
                title="We live in a platform world"
                text="The market now demands a fully digital enterprise – where digital is at the core rather than an “extension” or “bolt-on”. Publicis.Sapient is purpose designed to address core belief that success comes at the intersection of company and customer. We are pioneering a new way of working with clients, driven by a connected group of deep specialists and  enabled by a specifically designed culture to foster platform behaviors – open, configurable, quick.Rapidly changing customer expectations (e.g. anytime, anywhere, mobile device empowered) and behavior (e.g. shifting media consumption, explosion of user generated content) have created challenges and opportunities for every business to more meaningfully engage its customers and. anticipate their needs. Ongoing advances in technology are enabling new value creation often by connecting previously separate activities."
              />
            </Col>
          </Row>
        </div>

        <div style={divStyle}>
          <Row>
            <Col sm="6">
              <CardWithTitle
                title="Ideas"
                text="Nearly three-quarters of these same organizations also agree it is “likely” or “very likely” that their sector’s leader will be a digital disruptor within five years."
              />
            </Col>
            <Col sm="6">
              <CardWithTitle
                title="Digital & Disrupted"
                text="Global trends such as digitalization, smart data, greater individualization of products and service, decentralization and the renewables-storage."
              />
            </Col>
          </Row>
        </div>

        <div style={divStyle}>
          <Row>
            <Col sm="6">
              <CardWithTitle
                title="Our answer is a platform model"
                text="Publicis.Sapient is purpose designed to address todays digital business transformation imperative"
              />
            </Col>

            <Col sm="6">
              <CardWithTitle
                title="Extensions to Digital Core"
                text="Companies today often face an existential threat. The business model that they used to pursue and maintain competitive."
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
