import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Titasari Pratiwi </span>
            from <span className="purple"> Indonesia.</span>
            <br />
            I am currently seeking opportunities for an internship.
            <br />
            I’m currently an undergraduate student studying Information Systems and Technology.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self Development Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Musics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning to write programs stretches your mind and helps you think better, creates a way of thinking about things that I think is helpful in all domains."{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
