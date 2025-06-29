import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/Navbar.css'
import { BiWorld } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap, FaNode, FaGitAlt, FaGithub, FaAws, FaLinkedin } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Card from 'react-bootstrap/Card'
import 'aos/dist/aos.css'
import adminpanelimg from '../components/Images/Admin panel.png'
import loginimg from '../components/Images/LoginPage.png'
import userdataimg from '../components/Images/UserLogin.png'
import userviewimg from '../components/Images/UserView.png'
import courseimg from '../components/Images/CourseOverview.png'

const NavbarElement = () => {
    AOS.init({});
    const slide = useRef(null)
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY
            if (scrollY.toFixed(0) > 30) {
                slide.current.style.position = 'fixed';
                slide.current.style.top = '0'
                slide.current.style.backgroundColor = 'black'
            } else {
                slide.current.style.position = 'relative'
                slide.current.style.backgroundColor = 'transparent'
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    const images = [adminpanelimg, courseimg, userdataimg, userviewimg, loginimg]
    const [index, setIndex] = useState(0)

    const changeIndex = () => {
        setIndex(Math.floor(Math.random() * 5))
    }

    useEffect(() => {
        const interval = setInterval(changeIndex, 2000);
        return () => { clearInterval(interval) }
    }, [])

    useEffect(() => {
        console.log(index)
    }, [index])





    return (
        <>
            <div id='main' style={{ height: '100vh' }}>
                <div className='hero-container'>
                    <Navbar expand="lg" className="col-12 d-flex justify-content-center" id='navBar' style={{ zIndex: '1000' }} ref={slide}>
                        <div className='d-flex justify-content-between col-10'>
                            <div>
                                <Navbar.Brand>Vishal</Navbar.Brand>
                            </div>
                            <div>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} role='button' to="home" spy={true} smooth={true} offset={-70} duration={200} activeClass='active'>Home</Nav.Link>
                                        <Nav.Link as={Link} role='button' to="about" spy={true} smooth={true} offset={-70} duration={200} activeClass='active'>About</Nav.Link>
                                        <Nav.Link as={Link} role='button' to="skills" spy={true} smooth={true} offset={-70} duration={200} activeClass='active'>Skills</Nav.Link>
                                        <Nav.Link as={Link} role='button' to="link" spy={true} smooth={true} offset={-70} duration={200} activeClass='active'>Project</Nav.Link>
                                        <Nav.Link as={Link} role='button' to="contact" spy={true} smooth={true} offset={-70} duration={200} activeClass='active'>Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </div>
                    </Navbar>
                    <div id='home' className='col-12 d-flex align-items-center justify-content-center' style={{ height: '90%' }}>
                        <div className='color-blobs'></div>
                        <div className='col-12 col-md-8 col-lg-7 p-3 d-flex flex-column align-items-center'>
                            <p className='col-12 ubuntu-medium mt-5' id='hero-content'>What I love, I build and I build the web</p>
                            <div className='d-flex gap-2'>
                                <a href='#about' className='btn d-flex align-items-center gap-1 cta'><BiWorld />Discover</a>
                                <a href='#contact' className='btn d-flex align-items-center gap-1 cta'><IoIosContact />Contact me</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='about' className='col-12 d-flex flex-column gap-5 main-cont-pad' style={{ backgroundColor: '#1c1f26' }}>
                    <div className='col-11 col-lg-7' data-aos="fade-up">
                        <p className='ubuntu-medium' style={{ fontSize: '30px', color: '#E6EDF3' }}>Hi There I'm Vishal,</p>
                        <p style={{ fontSize: '20px', color: '#8B949E' }}>A passionate web developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on building fast, responsive, and user-friendly websites. I love transforming ideas into scalable digital solutions using clean code, modern design, and SEO best practices</p>
                    </div>
                    <div className='col-11 col-lg-5' data-aos="fade-up">
                        <p className='ubuntu-medium' style={{ fontSize: '30px', color: '#E6EDF3' }}>Recent Experience</p>
                        <p className='ubuntu-medium' style={{ fontSize: '20px', color: '#8B949E' }}>2025 Jan - present</p>
                        <p style={{ fontSize: '20px', color: '#8B949E' }}>Intern @ Kitkat Web Technologies</p>
                    </div>
                </div>
                <div className='col-12 d-flex flex-column align-items-center gap-5 main-cont-pad' id='skills' style={{ backgroundColor: '#20232a' }}>
                    <div data-aos="fade-up">
                        <p className='ubuntu-medium' style={{ fontSize: '50px', color: '#E6EDF3' }}>🛠️ Skills</p>
                    </div>
                    <div id='cardContainer' className='col-11 d-flex flex-wrap flex-lg-nowrap gap-3' data-aos="fade-up">
                        <Card style={{ width: '20rem', height: '300px' }} data-aos="zoom-in-right" data-aos-delay='200' className='card'>
                            <Card.Body className='d-flex flex-column justify-content-evenly'>
                                <Card.Title className='ubuntu-medium fs-3' style={{ color: "#E6EDF3" }}>Front-End</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted d-flex gap-2 fs-2"><FaHtml5 className="text-warning" />
                                    <FaCss3 className="text-primary" />
                                    <FaJs style={{ color: '#f0db4f' }} />
                                    <FaReact style={{ color: '#61DBFB' }} />
                                    <FaBootstrap style={{ color: '#7952B3' }} />
                                </Card.Subtitle>
                                <Card.Text style={{ color: '#8B949E' }}>
                                    Building responsive, accessible, and fast UIs using modern frontend frameworks and clean design principles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '300px' }} data-aos="zoom-in-up" data-aos-delay='300' className='card'>
                            <Card.Body className='d-flex flex-column justify-content-evenly'>
                                <Card.Title className='ubuntu-medium fs-3' style={{ color: "#E6EDF3" }}>Back-End</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted d-flex gap-2 fs-2">
                                    <FaNode style={{ color: '#68A063' }} />
                                    <SiExpress style={{ color: '#fff' }} />
                                </Card.Subtitle>
                                <Card.Text style={{ color: '#8B949E' }}>
                                    Developing secure backend services and APIs to power dynamic, full-stack applications efficiently.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '300px' }} data-aos="zoom-in-up" data-aos-delay='300' className='card'>
                            <Card.Body className='d-flex flex-column justify-content-evenly'>
                                <Card.Title className='ubuntu-medium fs-3' style={{ color: "#E6EDF3" }}>Database</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted d-flex gap-2 fs-2"> <SiMongodb style={{ color: '#4DB33D' }} /></Card.Subtitle>
                                <Card.Text style={{ color: '#8B949E' }}>
                                    Designing efficient and scalable data models using NoSQL technologies like MongoDB for modern web apps.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '300px' }} data-aos="zoom-in-left" data-aos-delay='200' className='card'>
                            <Card.Body className='d-flex flex-column justify-content-evenly'>
                                <Card.Title className='ubuntu-medium fs-3' style={{ color: "#E6EDF3" }}>Tools</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted d-flex gap-2 fs-2">
                                    <FaGitAlt style={{ color: '#F1502F' }} />
                                    <FaGithub style={{ color: '#fff' }} />
                                    <SiPostman style={{ color: '#FF6C37' }} />
                                    <VscVscode style={{ color: '#007ACC' }} />
                                    <FaAws style={{ color: '#FF9900' }} />
                                </Card.Subtitle>
                                <Card.Text style={{ color: '#8B949E' }}>
                                    Managing code, testing APIs, deploying apps and streamlining development using Git, Postman, VS Code, and AWS.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div div id='project' className='col-12 d-flex flex-column align-items-center gap-5 main-cont-pad' style={{ backgroundColor: '#1c1f26' }}>
                    <div data-aos="fade-up">
                        <p className='ubuntu-medium' style={{ fontSize: '50px', color: '#E6EDF3' }}>Latest Work</p>
                    </div>
                    <div id='cardContainer' className='col-12' data-aos="fade-up">
                        <Card style={{ width: '100%', height: 'fit-content', padding: '20px' }} data-aos="zoom-in-right" data-aos-delay='200' className='card'>
                            <Card.Body className='d-flex flex-wrap gap-5 justify-content-evenly col-12'>
                                <div className='col-12 col-lg-5 d-flex flex-column gap-3'>
                                    <Card.Title className='ubuntu-medium fs-3' style={{ color: "#E6EDF3" }} data-aos="fade-right">Multi-Dashboard Template for Admin & User Panel</Card.Title>
                                    <Card.Text style={{ color: '#8B949E' }} data-aos="fade-right">
                                        Building responsive, accessible, and fast UIs using modern frontend frameworks and clean design principles.
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 d-flex gap-2 fs-3" style={{ color: '#8B949E' }} data-aos="fade-right">Key Features:</Card.Subtitle>
                                    <ul style={{ color: '#8B949E', listStyle: 'none' }} data-aos="fade-right">
                                        <li>🔐 Role-based layout: Separate views for Admin and User</li>
                                        <li>🧭 Dynamic routing with protected page components</li>
                                        <li>📊 Interactive UI components like tables, cards, charts</li>
                                        <li>📁 Data-driven design using mock API integration</li>
                                        <li>🌙 Fully responsive & dark-themed interface</li>
                                    </ul>
                                    <a href="https://github.com/vishal1793/myapp" target='blank' className='btn btn-primary' data-aos="fade-right">Git Hub code</a>
                                </div>
                                <div className='col-12 col-lg-6' data-aos="fade-left">
                                    <img src={images[index]} alt="img" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div id='contact' className='col-12 d-flex flex-column align-items-center gap-3 main-cont-pad' style={{ backgroundColor: '#161B22' }}>
                    <p className='ubuntu-medium' style={{ fontSize: '50px', color: '#E6EDF3' }} data-aos="fade-right">Contact</p>
                    <div className='col-11 col-md-8 col-lg-5 text-center' data-aos="fade-right">
                        <p style={{ color: '#8B949E' }}>For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a style={{ textDecoration: "none" }} href="mailto:vishalashok2003@gmail.com">vishalashok2003@gmail.com</a></p>
                    </div>
                    <div className='col-11 col-md-8 col-lg-5' data-aos="fade-right">
                        <form className='d-flex flex-column gap-3'>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                            <textarea cols="30" rows="5" placeholder='Project details'></textarea>
                            <button className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
                <div id='footer' className='d-flex flex-column align-items-center p-3 p-lg-5 gap-3' style={{ backgroundColor: '#2c2f36' }}>
                    <div className='ubuntu-medium' style={{ fontSize: '30px', color: '#E6EDF3' }}>Stay Connected!</div>
                    <div className='d-flex gap-3'><a href="https://www.linkedin.com/in/vishal-ashok-073b25b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDcS%2BK5E1QH%2BqpewHLjerQg%3D%3D" target='blank'><FaLinkedin fontSize='30px' className='text-primary' /></a><a href="https://github.com/vishal1793" target='blank'><FaGithub fontSize='30px' color='#fff' /></a></div>
                    <div style={{ color: '#8B949E' }}>Vishal ©2025 All rights reserved</div>
                </div>
            </div>
        </>
    );
}

export default NavbarElement;
