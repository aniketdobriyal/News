import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div  style={{width: "100%",overflow:"hidden"}}>
       <footer>
    <div className="footer-container">
    
      <div className="footer-content">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>We are passionate creators sharing valuable insights on coding, design, and business. Our goal is to help
            you stay ahead in the fast-evolving digital world with practical tips, innovative ideas, and strategies for
            success.</p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> support@myblog.com</p>
          <p><strong>Phone:</strong> +91 (800) 123-4567</p>
          <p><strong>Address:</strong> 123 Blog St, Content City, Country</p>
        </div>
      </div>



   
      <div className="footer-content">
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest posts, news, and updates. Subscribe to our newsletter.</p>
          <form action="#">
            <input type="email" placeholder="Enter your email" required/>
            <button type="submit" >Subscribe</button>
          </form>
        </div>

        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>

        <div className="footer-blog">
          <h3>Latest Blog Posts</h3>
          <ul>
            <li><a href="#">How to Start Your Coding Journey</a></li>
            <li><a href="#">Top 10 UI/UX Design Trends</a></li>
            <li><a href="#">Business Strategies for 2024</a></li>
            <li><a href="#">Best Mobile App Development Tools</a></li>
          </ul>

        </div>

      </div>



     
      <div className="footer-social">
        <p>Follow Us:</p>
        <div className="social-links">
          <a href="#" target="_blank">
            <img
              src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
              alt="Instagram" width="auto" height="40px"/>
          </a>
          <a href="#" target="_blank">
            <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1-599x599.png" alt="Facebook"
              width="auto" height="37px"/>
          </a>
          <a href="#" target="_blank">
            <img
              src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"
              alt="Twitter" width="auto" height="43px"/>
          </a>
          <a href="#" target="_blank">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn" width="auto" height="47px"/>
          </a>
        </div>
      </div>

    </div>
  </footer>

    </div>
  )
}
