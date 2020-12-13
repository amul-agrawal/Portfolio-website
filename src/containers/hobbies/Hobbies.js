import React, { useContext,useState } from "react";
import './Hobbies.css';
import { hobbyDetails } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Hobbies() {
  const { isDark } = useContext(StyleContext);
  const [idx, setIdx] = useState(0);
  return (
  <div className={isDark ? "dark-mode main" : "main"} id="hobbies">
      <h1
        className={isDark ? "dark-mode hobby-heading" : "hobby-heading"}
      >
      Hobbies
      </h1>
      <div className="hobby-main-div">

        <Fade left duration={1000}>
          <div className="hobby-image-div">
            <img
              alt="Amul Working"
              src={`./hobbies/${hobbyDetails[idx].url}`}
              style={{ width: "100%", height: "500px" }}
              ></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="hobby-text-div">
            <h2
              className={isDark ? "dark-mode hobby-text-heading" : "hobby-text-heading"}
              >
              {hobbyDetails[idx].heading}
            </h2>
            <p
              className={
                isDark
                ? "dark-mode subTitle hobby-text-subtitle"
                : "subTitle hobby-text-subtitle"
              }
              >
             {hobbyDetails[idx].text}
            </p>
          </div>
        </Fade>
      </div>
      <div className="controller">
        < span style={{display: "inline"}} >
        <a onClick={() => setIdx((idx-1+hobbyDetails.length)%hobbyDetails.length)} className="prev-hobby-buttons">
        &#8249;
        </a>
        {
          hobbyDetails.map((hobby, id) => {
            return (
              id == idx 
              ?
              <span className="circle-filled" > 
              </span>
              :
              <span className="circle" > 
              </span>
            )
          })
        }
        <a onClick={() => setIdx((idx+1)%hobbyDetails.length)} className="next-hobby-buttons">
        &#8250;
        </a>
        </span>
      </div>
      
    </div>
  );
}
