import React, { useState } from 'react';
import { Nav, Tab, Container } from 'react-bootstrap';

const TabNavigation = () => {
  const [key, setKey] = useState('about-me');

  return (
    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
      <Container className="tab-container mb-4">
        <Nav variant="pills" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="about-me" className="custom-tab">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="experiences" className="custom-tab">Experiences</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="recommended" className="custom-tab">Recommended</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="tab-content-box mt-3">
          <Tab.Pane eventKey="about-me" className="centered-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolorum possimus sit eveniet quia quas, nesciunt minima, pariatur autem doloremque, debitis asperiores cum est eligendi dicta blanditiis. Recusandae, accusantium sit?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae reiciendis quidem odio vitae quibusdam ex eligendi totam sunt deleniti incidunt dicta delectus, assumenda quas quisquam? Sint voluptatum sed nulla cum?
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="experiences" className="centered-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor quod illo blanditiis totam veritatis commodi saepe sed fugit cum neque laudantium, incidunt iusto laboriosam tempore, accusamus officiis consectetur voluptate!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quod ab consequatur provident asperiores autem deleniti praesentium excepturi vitae laudantium nam fugit dolore magnam cum itaque, a ipsum, repellendus exercitationem!
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="recommended" className="centered-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maxime magnam qui explicabo ut, dolores quibusdam corporis provident sequi laudantium porro voluptates, nesciunt id veritatis soluta magni eveniet nisi neque?I
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae deserunt nisi ab inventore voluptate. Quia in minus fugiat minima, tempora dolore. Explicabo nam debitis exercitationem porro perspiciatis odio? Totam, iusto!
            </p>
          </Tab.Pane>
        </Tab.Content>
      </Container>
    </Tab.Container>
  );
};

export default TabNavigation;
