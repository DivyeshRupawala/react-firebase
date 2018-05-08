import React from "react";
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

const CardWithTitle = ({ title, text }) => (
  <Card body>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
    <Button>Go somewhere</Button>
  </Card>
);

export default CardWithTitle;
