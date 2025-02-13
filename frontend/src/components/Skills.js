import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/python.png";
import meter2 from "../assets/img/html.png";
import meter3 from "../assets/img/css.png";
import meter4 from "../assets/img/django.png";
import meter5 from "../assets/img/react.png";
import meter6 from "../assets/img/mysql.png";
import meter7 from "../assets/img/javascript.png";
import meter8 from "../assets/img/flask.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4 // Adjust this value to show more items on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3 // Adjust this value to show more items on tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2 // Adjust this value to show more items on mobile
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm learning and growing as a Full Stack Developer by building web applications with Python, Django, React. I enjoy working on both the frontend and backend, improving my problem-solving skills, and exploring new technologies along the way.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Flask</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
