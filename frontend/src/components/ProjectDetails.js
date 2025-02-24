// filepath: /c:/Users/Xendo/Desktop/personal-portfolio/frontend/src/components/ProjectDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/projects/${id}/`)
            .then(response => response.json())
            .then(data => setProject(data));
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{project.title}</h2>
                    <img src={project.image} alt={project.title} />
                    <p>{project.description}</p>
                    {project.link && <a href={project.link}>View Project</a>}
                </Col>
            </Row>
        </Container>
    );
};