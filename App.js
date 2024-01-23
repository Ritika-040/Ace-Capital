import React from "react";
import Footer from "./Components/footer";
import Routes from "./Routes/route";
import Navbar from "./Components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
