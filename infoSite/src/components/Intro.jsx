import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import masila from "../assets/masila.jpg";
const Intro = () => {
  return (
    <div className="container">
      <div className="int">
        <img src={masila} alt="masila" width={"500px"} height={"500px"} />

        <h1> Masila Kimeu</h1>
        <h4 className="title">Frontend Developer</h4>
        <p>kimeudan05@gmail.com</p>
      </div>
      <div className="buttons">
        <button>
          <img src={email} alt="" />
        </button>
        <button>
          <img src={linkedin} />
        </button>
      </div>
      <div className="sections">
        <section>
          <h3>About</h3>
          <p>
            I am a fronetend developer with a particular interest in making
            things simple and automaticalluy daily tasks. i try to keep up with
            security and best practices, i am always looking for new things to
            learn
          </p>
        </section>
        <section>
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. internet fanatic. bacon bulf.
            Entrepreneur. travel geek. pop culture coffe fanatic
          </p>
        </section>
      </div>

      <footer>
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={github} alt="github" />
      </footer>
    </div>
  );
};

export default Intro;
