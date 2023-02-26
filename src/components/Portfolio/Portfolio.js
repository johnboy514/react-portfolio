import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    const projects = [
        {
          name: "Project 1",
          link: "link 1" 
        },
        {
            name: "Project 2",
            link: "link 2" 
        },
        {
            name: "Project 3",
            link: "link 3" 
        },
        {
            name: "Project 4",
            link: "link 4" 
        },
      ];
      return projects.map((el) => {
    return (
      <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                {el.link}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
});
}

export default Portfolio;