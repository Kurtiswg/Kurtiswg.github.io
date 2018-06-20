import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="Profile-card">
        <div className="Profile-card-header">
          <a href="https://kurtiswg.github.io">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Shiba_inu_blacktan.jpg" alt="Shiba"/>
          </a>
          <h1>Kurtis Gibb</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="Profile-card-profile">
          <p>Greetings!</p>
          <p>I am a full stack developer. I mainly work with .NET, C#, VB.NET, ASP.NET, HTML5, CSS and JavaScript.
            <br />I also have an interest in machine-learning and blockchain technology.</p>
          <p>Note: that is not my dog, but I wish it was.</p>
        </div>
        <ul className="Profile-card-social">
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
    );
  }
}

export default ProfileCard;
