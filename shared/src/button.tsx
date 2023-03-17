import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
const Span = styled.span``

const Button = (props: { children: React.ReactNode }) => {
  return (
    <button
      css={css`
        ${Span} {
          color: blue;
        }
      `}
    >
      <Span>{props.children}</Span>
    </button>
  )
}

export default Button
