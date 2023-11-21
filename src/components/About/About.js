import React from "react";
import Card from 'react-bootstrap/Card';
import '../../App.css';


const About = () => {
    return (
    <center className="pb-4 bg-info">
    <Card className="bg-secondary" style={{ maxWidth: '50rem', marginBottom: '200px'}}>
      <Card.Img className="mx-auto" style={{ marginBottom: '50px', marginTop: '15px', maxWidth: '10rem', borderRadius: '100px'}} variant="top" src=".\images\Photo_for_react.jpg" />
      <Card.Body>
        <Card.Title>John Ifert-Miller</Card.Title>
        <Card.Title>About</Card.Title>
        <Card.Text>
        I am A full stack developer building off of experience doing freelance work.
        I have enjoyed working with computers and using them throughout my life and wanted to deepen my understanding and possibly make a living off it at the same time.
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
  );
};

export default About;