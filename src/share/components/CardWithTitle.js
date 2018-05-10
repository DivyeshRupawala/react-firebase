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

const CardWithTitle = ({ title, text, children }) => (
  <Card body>
    {title ? <CardTitle>{title}</CardTitle> : ""}
    {text ? <CardText>{text}</CardText> : ""}
    {children ? children : <Button>Go somewhere</Button>}
  </Card>
);

export default CardWithTitle;
