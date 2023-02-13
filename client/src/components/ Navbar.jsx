import React from "react";
import styled from "styled-components";
// import Navbar from "react-bootstrap/Navbar";
const Wrapper = styled.div`
  color: blue;
`;

const Nav = styled.nav`
  color: red;
`;

// const  = styled.nav`
// color:white
// `;
// display: flex;
// justify-content: space-around;
function Navbar() {
  return (
    <>
      <Wrapper>
        <Nav classNameName="navbar navbar-expand-sm bg-warning justify-content-around">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30"
                  height="30"
                >
                  <path d="m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z"></path>
                </svg>
                SPACEJAM
              </a>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
          {/* <nav classNameName="navbar navbar-expand-big bg-Danger justify-content-center">
            <ul classNameName="navbar-nav">
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="https://www.nasa.gov/">
                  SPACE JAM
                </a>
              </li>
            </ul>
          </nav> */}
        </Nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
