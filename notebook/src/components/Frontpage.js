import React from 'react'
import './css/front.css'
export default function Frontpage() {
    return (
        <div>
            {/* <header>
                <nav class="navbar">
                    <div class="logo">YOUR WEBSITE</div>
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Info</a></li>
                        <li><a href="contact.html" class="get-started">HELPLINE</a></li>
                    </ul>
                </nav>
            </header> */}

            <section className="hero">
                <div className="hero-content">
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero feugiat, faucibus libero id,
                        scelerisque quam.</p>
                    <button className="cta-button">Button Name</button>
                </div>
                <div className="hero-image">
                    
                    <img src="https://img.freepik.com/free-vector/world-mental-health-day-flat-design-illustration_23-2149654113.jpg?w=740&t=st=1727938902~exp=1727939502~hmac=4b9048d3e80df6e0c1bf91cc1911ceffb543cc4f1c275475c6ba145c2abba1f3" alt="Website Design Illustration"/>
                </div>
            </section>

        </div>
    )
}
