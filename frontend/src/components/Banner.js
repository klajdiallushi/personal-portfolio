import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Banner.css'; // Import the CSS file for the tooltip

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150); // Increase typing speed
  const period = 2000;
  const mountRef = useRef(null);

  const toRotate = useMemo(() => ["Junior Full Stack Developer"], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset typing speed
    }
  }, [isDeleting, loopNum, period, text.length, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 10).normalize();
    scene.add(light);

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(require('../assets/img/need_some_space.glb'), (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Set default position and rotation
      model.position.set(1.4, 0.5, 0.5);
      model.rotation.set(1, Math.PI, 0.1); // Adjust rotation 

      // Add OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true; // Enable zoom controls

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    });

    camera.position.z = 4; // Adjust the initial zoom level to your desired value

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    if (currentSection) {
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        const offset = nextSection.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (nextSection.offsetHeight / 2);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  }

  return (
    <section className="banner" id="home">
      <div className="threejs-background" ref={mountRef}></div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Klajdi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "A Full Stack Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Junior Full Stack Developer with a focus on Python, Django, React, and JavaScript. Passionate about building dynamic web applications and improving user experiences. Skilled in frontend and backend development, authentication systems, and database management, with a continuous drive to learn and grow 
                </p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <button className="scroll-button" onClick={scrollToNextSection}><ArrowDownCircle size={50} /></button>
    </section>
  )
}