import React from "react";
import "./App.css";
import Routes from "./routes";
import Welcome from "./pages/welcome/welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Welcome />
      </Routes>
    </div>
  );
}
export default App;
