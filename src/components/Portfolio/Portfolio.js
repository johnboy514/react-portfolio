import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './portfolio.css'

function Portfolio() {
    const projects = [
        {
          name: "Covid Tracker",
          description:"Tracked news about covid by area!",
          link: "https://eaponte24.github.io/Covid-Tracker/",
          image: "./images/Covid-tracker.jpg" 
        },
        {
          name: "Work Day Scheduler",
          description:"Helpful to plan the day!",
          link: "https://johnboy514.github.io/Work-Scheduler/",
          image: "./images/Work_Scheduler.png" 
        },
        {
          name: "Weather Tracker",
          description:"See the weather for the week ahead!",
          link: "https://johnboy514.github.io/Weather/",
          image: "./images/Weather-test.png" 
        },
        {
          name: "Password Generator",
          description:"Generate new and unique codes!",
          link: "https://johnboy514.github.io/Password-Generator/",
          image: "./images/Pass_gen.png" 
        },
        {
          name: "Code Quiz",
          description:"Test your skills!",
          link: "https://johnboy514.github.io/Quiz/",
          image: "./images/Quiz.png" 
      },
      {
        name: "Note Taker",
        description:"Keep track of all your thoughts!",
        link: "https://note-taker-app-best.herokuapp.com/notes",
        image: "./images/Note_Taker.png" 
      }
      ];
      return (
        <center className="pb-4 bg-info">
          <div class="container">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4">
          {projects.map((el) => (
            <Col>
            <a href={el.link}>
              <Card style={{ maxWidth: 300, minHeight: 450, maxHeight: 350, backgroundColor: "lightGreen"}}>
                <Card.Img className="mx-auto" style={{ marginBottom: '20px', marginTop: '15px', maxWidth: '16rem', borderRadius: '25px'}} variant="top" src={el.image} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                  {el.description}
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
            </Col>
            ))}
        </Row>
        </div>
        </center>
      );
}

export default Portfolio;