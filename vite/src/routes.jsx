import React from "react"
import { Route, Switch } from "react-router-dom"

function Suspense({ fallback, children }) {
  return <React.Suspense fallback={fallback}>{children}</React.Suspense>
}

const LazyTwo = React.lazy(() => import("src/two"))
const LazyOne = React.lazy(() => import("src/one"))

const One = (props) => (
  <Suspense fallback={null}>
    <LazyOne {...props} />
  </Suspense>
)

const Two = (props) => (
  <Suspense fallback={null}>
    <LazyTwo {...props} />
  </Suspense>
)
const _Routes = () => {
  return (
    <Switch>
      <Route exact path="/one" component={One} />
      <Route exact path="/two" component={Two} />
    </Switch>
  )
}

export default _Routes
