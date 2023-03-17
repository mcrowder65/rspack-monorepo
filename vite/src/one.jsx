import React from "react"
import styled from "@emotion/styled"
import Button from "shared/src/button"
const P = styled.p``
const Container = styled.div`
  ${P} {
    :hover {
      color: blue;
    }
  }
`
const One = () => {
  return (
    <Container>
      <P>I am onadfa!</P>
      <Button>I am button</Button>
    </Container>
  )
}

export default One
