import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../../App.css';

function Contact() {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value === '') {
      setVisible(true);
    } if (email.current.value === '') {
      setVisible2(true);
    } if (message.current.value === '') {
      setVisible1(true);
    } else {
      sendMail();
    }
  };
  (function () {
    emailjs.init("Kl4KwxkE5De5r_acm");
    })();
    function sendMail() {
    if(name.current.value && email.current.value && email.current.value) {
    var params = {
      from_name: name.current.value,
      from_email: email.current.value,
      message: message.current.value
      };
      emailjs.send( 'service_2dldr3m', 'template_pgrwfsz', params).then(function (res) {});
      alert("Thank you for sending a message!")
      window.location.reload(false);
    } else {
      alert('Failed to send message')
    }
    };
  return (
    <center>
      <h1>Send me a message</h1>
      <br></br>
    <Form onSubmit={handleSubmit} className="px-5" style={{ marginBottom: 200, maxWidth: 600, minHeight: 315, backgroundColor: "lightgreen", borderRadius: 25}}>
      <Form.Group className="mb-3 pt-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={name} placeholder="Enter name" />
        {visible && <div className="text-danger">Please enter your name</div>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder={"Enter email"} />
        {visible2 && <div className="text-danger">Please enter your Email</div>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" ref={message} rows={5} placeholder="Enter message" />
        {visible1 && <div className="text-danger">Please enter your message</div>}
      </Form.Group>

      <Button className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  );
}

export default Contact;