import React from "react";
import styled, { keyframes } from "styled-components";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <header>
        <h1>B.S.S.N.Jagannath</h1>
        <p>Portfolio</p>
      </header>

      <nav>
        <a href="#section1">About</a>
        <a href="#section2">Education & Experience</a>
        <a href="#section3">Skills</a>
        <a href="#section4">Projects</a>
        <a href="#section5">Resume</a>
        <a href="#section6">Contact</a>
      </nav>

      <section id="section1">
        <h2>Jagannath</h2>
        <p>
          <span>W</span>
          <span>e</span>
          <span>b</span> <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </p>
      </section>

      <section id="section2">
        <h2>Education & Experience</h2>
        <p>
          Name: B.S.S.N.Jagannath <br />
          Education: BTech in Computer Science and Engineering
          <br />
          Skills: Web Developer
          <br />
          Experience: Fresher
          <br />
          Interests: Learning new technologies
        </p>
      </section>

      <section id="section3">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section id="section4">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Calculator</h3>
          <p>Description: A simple calculator web application</p>
        </div>
        <div className="project-card">
          <h3>E-commerce</h3>
          <p>
            Description: An e-commerce website for buying and selling products
          </p>
        </div>
        <div className="project-card">
          <h3>Library Management System</h3>
          <p>
            Description: A system for managing library resources, books, and
            members
          </p>
        </div>
      </section>

      <section id="section5">
        <h2>Resume</h2>
        <a className="resume-button" href="r1.docx" download>
          Download Resume
        </a>
      </section>

      <section id="section6">
        <h2>Contact</h2>
        <p>Email: jagannathb082004@gmail.com</p>
        <p>Phone: 9346060936</p>
        <p>Location: Vizag, Andhra Pradesh</p>
      </section>

      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
