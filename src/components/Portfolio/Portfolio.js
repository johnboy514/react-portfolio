import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './portfolio.css'
import '../../App.css';

function Portfolio() {
    const projects = [
        {
          name: "DnD Helper App",
          description:"Designed to help run a zombie themed Dnd game for new and veteran players on their phones!",
          techUsed: "React, Javascript, HTML5, SCss3, Bootstrap, Regex, MongoDb, Express.js, Node",
          link: "https://dndhelperapp-1b8e93a876a7.herokuapp.com/",
          repoLink: "https://github.com/rjo6615/DnD/tree/multiClass",
          image: "./images/Dnd.jpg" 
        },
        {
          name: "Website Builder Form",
          description:"Designed to help streamline the process of building sites for people",
          techUsed: "React, Javascript, HTML5, CSS3, Bootstrap, Regex, Email.Js",
          link: "https://johnboy514.github.io/websiteform/",
          repoLink: "https://github.com/johnboy514/websiteform",
          image: "./images/websiteform.jpg" 
        },
        {
          name: "Yoga Sound and Healing",
          description:"Landing page made for a yoga company in Atlanta GA ",
          techUsed: "React, Javascript, HTML5, CSS3, Bootstrap",
          link: "https://rjo6615.github.io/breeyoga/",
          repoLink: "https://github.com/rjo6615/breeyoga",
          image: "./images/yoga.jpg" 
        },
        {
          name: "Wild Bergamot",
          description:"Landing page made for a landscaping company located in Marshall NC!",
          techUsed: "React, Email.js, Regex, Javascript, HTML5, Css3, Bootstrap",
          link: "https://wildbergamot.net/",
          repoLink: "https://github.com/johnboy514/landscapingwildbergamot",
          image: "./images/wildbergamot.jpg" 
        },
        {
          name: "Covid Tracker",
          description:"Tracked news about covid by area!",
          techUsed: "API, javascript, HTML5, Css3, Bootstrap",
          link: "https://eaponte24.github.io/Covid-Tracker/",
          repoLink: "https://github.com/Eaponte24/Covid-Tracker",
          image: "./images/Covid-tracker.jpg" 
        },
        {
          name: "Work Day Scheduler",
          description:"Helpful to plan the day!",
          techUsed: "jQuery, Bootstrap, Javascript, HTML5, Css3",
          link: "https://johnboy514.github.io/Work-Scheduler/",
          repoLink: "https://github.com/johnboy514/Work-Scheduler",
          image: "./images/Work_Scheduler.png" 
        },
        {
          name: "Weather Tracker",
          description:"See the weather for the week ahead!",
          techUsed: "API, jQuery, Bootstrap, Javascript",
          link: "https://johnboy514.github.io/Weather/",
          repoLink: "https://github.com/johnboy514/Weather",
          image: "./images/Weather-test.png" 
        },
        {
          name: "Password Generator",
          description:"Generate new and unique codes!",
          techUsed: "Javascript, HTML5, Css3",
          link: "https://johnboy514.github.io/Password-Generator/",
          repoLink: "https://github.com/johnboy514/Password-Generator",
          image: "./images/Pass_gen.png" 
        },
        {
          name: "Code Quiz",
          description:"Test your skills!",
          techUsed: "Javascript, HTML5, Css3",
          link: "https://johnboy514.github.io/Quiz/",
          repoLink: "https://github.com/johnboy514/Quiz",
          image: "./images/Quiz.png" 
        },
        {
          name: "Fit Quest",
          description:"We do the Fit things!",
          techUsed: "React, MongoDB, Express.js, Bootstrap, Node.js and API",
          link: "https://fitquest.herokuapp.com/",
          repoLink: "https://github.com/rjo6615/Fit-Quest",
          image: "./images/Fitquest.jpg" 
        }
      ];
      return (
        <center className="pb-4 bg-info">
          <div class="container">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4">
          {projects.map((el) => (
            <Col>
              <Card style={{ maxWidth: 300, minHeight: 750, maxHeight: 750, backgroundColor: "lightGreen"}}>
                <Card.Img className="mx-auto" style={{ marginBottom: '20px', marginTop: '15px', maxWidth: '16rem', borderRadius: '25px'}} variant="top" src={el.image} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                  {el.description}
                  <br></br>
                  <br></br>
                  <h6>Tech used</h6>
                  {el.techUsed}
                  </Card.Text>
                </Card.Body>
                <a href={el.link}>
                <button class= "btn1">Live Site</button>
                </a>
                <a href={el.repoLink}>
                <button class= "btn1">Git Hub Repo</button>
                </a>
              </Card>
            </Col>
            ))}
        </Row>
        </div>
        </center>
      );
}

export default Portfolio;