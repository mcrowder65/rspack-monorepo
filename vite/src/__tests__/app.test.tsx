import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "src/app"

test(`WHEN clicking One!
      THEN One route appears`, async () => {
  render(<App />)
  await screen.findByText(/One!/i)

  await userEvent.click(screen.getByText(/one/i))

  await screen.findByText(/i am button/i)
})
