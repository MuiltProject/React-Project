import React from "react";
import "./index.styled.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="TextBox">
        <h2>New Arrival</h2>
      </div>
      <hr></hr>
      <div className="Wrapper">
        <div className="img-container">
          <Link to={"/details/1"}>
            <img src="img/03.jpg" alt=""></img>
          </Link>
          <div className="product-name">
            <h3>APPLIQUE DENIM JACKET</h3>
            <div className="text">
              <h3>218000won</h3>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src="img/04.jpg" alt=""></img>
          <div className="product-name">
            <h3>APPLIQUE DENIM PANTS</h3>
            <div className="text">
              <h3>158000won</h3>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src="img/05.jpg" alt=""></img>
          <div className="product-name">
            <h3>LEATHER SINGLE JACKET</h3>
            <div className="text">
              <h3>218000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/06.jpg" alt=""></img>
          <div className="product-name">
            <h3>RACING JACKET</h3>
            <div className="text">
              <h3>218000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/07.jpg" alt=""></img>
          <div className="product-name">
            <h3>WIND BREAKER</h3>
            <div className="text">
              <h3>218000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/08.jpg" alt=""></img>
          <div className="product-name">
            <h3>ANORAK JUMPER IN WHITE</h3>
            <div className="text">
              <h3>238000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/09.jpg" alt=""></img>
          <div className="product-name">
            <h3>ANORAK JUMPER IN GRAY</h3>
            <div className="text">
              <h3>238000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/10.jpg" alt=""></img>
          <div className="product-name">
            <h3>TRUCKER JACKET</h3>
            <div className="text">
              <h3>238000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/11.jpg" alt=""></img>
          <div className="product-name">
            <h3>SPELL POINT KNIT</h3>
            <div className="text">
              <h3>148000won</h3>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src="img/12.jpg" alt=""></img>
          <div className="product-name">
            <h3>LAYERED DENIM PANTS</h3>
            <div className="text">
              <h3>188000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/13.jpg" alt=""></img>
          <div className="product-namet">
            <h3>DENIM TOTEBAG</h3>
            <div className="text">
              <h3>168000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/14.jpg" alt=""></img>
          <div className="product-name">
            <h3>VINTAGE DENIMBAG</h3>
            <div className="">
              <h3>218000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/15.jpg" alt=""></img>
          <div className="product-name">
            <h3>SPORTY TOTEBAG IN BLUE</h3>
            <div className="text">
              <h3>178000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/16.jpg" alt=""></img>
          <div className="product-name">
            <h3>SPORTY TOTEBAG IN KHAKI</h3>
            <div className="text">
              <h3>178000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/17.jpg" alt=""></img>
          <div className="product-name">
            <h3>CAMPCAP IN GRAY</h3>
            <div className="text">
              <h3>58000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/18.jpg" alt=""></img>
          <div className="product-name">
            <h3>CAMPCAP IN BLACK</h3>
            <div className="text">
              <h3>58000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/19.jpg" alt=""></img>
          <div className="product-name">
            <h3>MS129 IN IVORY</h3>
            <div className="text">
              <h3>168000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/20.jpg" alt=""></img>
          <div className="product-name">
            <h3>MS129 IN CHARCOAL</h3>
            <div className="text">
              <h3>168000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/23.jpg" alt=""></img>
          <div className="product-name">
            <h3>KNIT TOP IN SKY</h3>
            <div className="text">
              <h3>98000won</h3>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="img/24.jpg" alt=""></img>
          <div className="product-name">
            <h3>KNIT TOP IN LIME</h3>
            <div className="text">
              <h3>98000won</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
