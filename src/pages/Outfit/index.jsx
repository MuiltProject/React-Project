import React from "react";
import "./index.styled.css";
import outfit_image from "./image/outfit_image.jpeg";
import outfit_image2 from "./image/outfit_image2.jpg";
import outfit_image3 from "./image/outfit_image3.jpg";
import outfit_image4 from "./image/outfit_image4.png";
import search_image from "./image/search_image.png";

function Outfit() {
  return (
    <div id="outfit">
      <div>
        <h1 id="outfit-title">Outfit</h1>
      </div>
      <div>
        <section id="main">
          <div className="image_box">
            <img src={outfit_image} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image2} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image3} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image4} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image2} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image3} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image4} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image2} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image3} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="image_box">
            <img src={outfit_image4} alt="alt" className="image" />
            <p className="text">Outfit</p>
            <p className="text">Style#000000</p>
          </div>
          <div className="bottom">
            <table>
              <tr>
                <input type="text" placeholder="Search" className="search_bar" />
                <button id="img_button">
                  <img src={search_image} alt="alt" />
                </button>
              </tr>
            </table>
            <table>
              <tr>
                <div className="page_nation">
                  <a href="/">1</a>
                  <a href="/">2</a>
                  <a href="/">3</a>
                  <a href="/">4</a>
                  <a href="/">5</a>
                </div>
              </tr>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Outfit;
