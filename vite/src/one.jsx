import React from "react"
import styled from "@emotion/styled"
import Button from "shared/src/button"
const P = styled.p``
const Img = styled.img``
const Container = styled.div`
  ${Img} {
    width: 150px;
  }
`
const One = () => {
  const [result, setResult] = React.useState("")
  React.useEffect(() => {
    fetch("/devtools/get-result")
      .then((result) => result.json())
      .then((data) => {
        setResult(data.branch)
      })
  }, [])
  return (
    <Container>
      <p>Mock services: {String(process.env.REACT_APP_MOCK_SERVICES)}</p>
      <p>env variable: {process.env.REACT_APP_MESSAGE}</p>
      <p>Branch: {result}</p>
      <P>I am onadfa!</P>
      <Button>I am button</Button>
      <Img src="/images/calendar-with-pills.png" alt="pills" />
    </Container>
  )
}

export default One
