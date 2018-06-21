import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard-layout">
        <div className="ContactCard-header">
          <h1>Contact</h1>
            <p>A proper contact form is currently in development. In the mean time,
              you can contact me on any of my linked social media or at kurtiswg@outlook.com
            </p>
        </div>
        <div className="ContactCard-social-media">
          <ul className="ContactCard-social-links">
            <li>
              <a href="https://twitter.com/WullyTweets">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tiWbuA1MeRUPsY7vQ6OPjvpXQkE-uC0Pane4zR3kGI2c3Hl9tA" alt="Twitter Icon"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kurtis-gibb-829148112/">
                <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-linkedin-3.png" alt="LinkedIn Icon"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/Kurtiswg">
                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub Icon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactCard;
