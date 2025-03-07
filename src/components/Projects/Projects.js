import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import courseconnect from "../../Assets/Projects/courseconnect.png"
import kebunq from "../../Assets/Projects/kebunq.png"
import image from "../../Assets/Projects/image.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courseconnect}
              isBlog={false}
              title="CourseConnect"
              description="Final Project from Bootcamp - CourseConnect is a platform designed to help users find course information that matches their interests and needs. The platform offers categories that make it easier for users to find the courses they are looking for. In addition, users can also contribute by adding new courses to the platform."
              ghLink="https://github.com/vereniaes/seraphic-course-connect"
              demoLink="https://course-connect-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kebunq}
              isBlog={false}
              title="KebunQ"
              description="Capstone Project from Bangkit Academy -  KebunQ, is a mobile application designed to assist home gardeners in Indonesia by using image recognition to identify plant diseases. This solution aims to simplify plant care by providing accurate disease diagnosis and treatment recommendations."
              ghLink="https://github.com/KebunQ-Bangkit-Capstone"
              demoLink="https://docs.google.com/uc?export=download&id=1T9xJosld8eudHgB9oW5CVkCq-DrldYop"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
