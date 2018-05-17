import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText
} from "reactstrap";

const CardWithTitle = ({ title, text, children }) => (
  <Card body>
    {title ? <CardTitle>{title}</CardTitle> : ""}
    {text ? <CardText>{text}</CardText> : ""}
    {children ? children : <Button>Go somewhere</Button>}
  </Card>
);

export default CardWithTitle;
