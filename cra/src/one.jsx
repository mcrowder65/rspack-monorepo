import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled"
const P = styled.p``
const Container = styled.div`
 ${P} {
   :hover {
     color: blue;
   }
 }
`
const One = () => {
  return <Container><P>I am one!</P></Container>;
};

export default One;
