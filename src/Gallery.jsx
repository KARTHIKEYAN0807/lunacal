import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Gallery = () => {
  const [images, setImages] = useState([
    'image.jpg',
    'image.jpg',
    'image.jpg'
  ]);

  const handleAddImage = () => {
    setImages([...images, 'image.jpg']);
  };

  return (
    <Container className="gallery-container">
      <Row className="align-items-center">
        <Col xs="auto">
          <div className="gallery-title">Gallery</div>
        </Col>
        <Col className="text-right">
          <Button variant="dark" className="add-image-btn" onClick={handleAddImage}>+ Add Image</Button>
        </Col>
        <Col xs="auto">
          <Button variant="dark" className="carousel-nav">❮</Button>
          <Button variant="dark" className="carousel-nav">❯</Button>
        </Col>
      </Row>
      <Row className="mt-3">
        {images.map((image, index) => (
          <Col md={4} key={index}>
            <div className="gallery-image" style={{ backgroundImage: `url(${image})` }}></div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
