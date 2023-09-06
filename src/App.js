import { Route, Routes } from "react-router";
import "./App.scss";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
