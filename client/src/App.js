//import logo from './logo.svg'
import Navbar from "./components/ Navbar";
import Cards from "./components/Cards";
import styled from "styled-components";
import About from "./pages/About";
// import background from "/Space.png";
import Header from "./pages/ Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";

// const Cards= styled.div`
// background-color:light blue;
// `;
// const cardDetails=[{text},{title},{header}]

const posts = [
  {
    id: 1,
    author: "Space Radiation",
    description: "This is the first post of this app",
  },
  {
    id: 2,
    author: "Health Countermeasures",
    description:
      " The Human Research Program (HRP) is dedicated to discovering the best methods and technologies to support safe, productive human space travel.",
  },
];

function App() {
  return (
    <div>
      <div style={{}}>
        <Header />
      </div>

      <Navbar />

      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYWNlc2hpcCUyMHB1cnBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Cards
            // text="Experiments to Unlock How Human Bodies React to Long Space Journeys!"
            // title="Brain and Behavior"
            // header="More About Space"
            posts={posts}
          />
        </div>
      </div>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Overview" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
