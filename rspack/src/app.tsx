import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/one">One!</Link>
      </div>
      <div>
        <Link to="/two">Two</Link>
      </div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
