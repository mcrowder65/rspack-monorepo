import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import "./button.css"
const Span = styled.span``
const MyButton = styled.button`
  height: 80px;
  width: 150px;
`
const Button = (props: { children: React.ReactNode }) => {
  return (
    <MyButton
      css={css`
        ${Span} {
          color: orange;
        }
      `}
      className="myClass"
    >
      <Span>{props.children}</Span>
    </MyButton>
  )
}

export default Button
