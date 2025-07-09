import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/but  ton/Button";
import Button from "../../components/button/Button";
import { greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import harishPhoto from "../../assets/images/Harish.jpg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  // <a
                  //   href="https://drive.google.com/file/d/1m6ytuXV56031-osPmv-7vNuDHl9fNePz/view?usp=sharing"
                  //   download="Resume.pdf"
                  //   className="download-link-button"
                  // >
                  <a
                    href="https://drive.google.com/uc?export=download&id=1m6ytuXV56031-osPmv-7vNuDHl9fNePz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
          <div className="greeting-image-div" style={{ width: "100%", marginTop: "2rem" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingBottom: "0", // removes bottom space
    }}
  >
    <img
      src={harishPhoto}
      alt="Harish"
      style={{
        width: "380px",             // max enlarged
        height: "380px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "6px solid white",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.4)",
        marginBottom: "0px",        // removes image bottom margin
      }}
    />
  </div>
</div>

        </div>
      </div>
    </Fade>
  );
}
