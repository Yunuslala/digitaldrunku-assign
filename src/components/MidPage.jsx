import { Button, Card, Divider, Input, Typography } from "antd";
import React from "react";
import "./MidPage.css";
import envelope from "../assets/Envelope (1).png";
import informatio from "../assets/Information.png"
const MidPage = () => {
  return (
    <div className="parent-home">
      <div className="first-child-top">
        <div className="headingParent">
          <div>
            <Typography className="margin-from-1">
              Turn Crypto Into Real Money
            </Typography>
          </div>
          <div className="heading-parent-second-child">
            <Typography className="heading margin-from">
              Two Steps to Convience
            </Typography>
            <Typography className="heading-2 margin-from">
              Purchase Your Prepaid Card with Crypto Instantly
            </Typography>
          </div>
        </div>
        <div className="display-none">
          <Typography className="Description-margin-from">
          With zero hidden fees and enhanced security features, you control your spending without compromise. Experience a seamless blend of crypto functionality and everyday usability today!
          </Typography>
        </div>
        <div>
          <button className="btn-how-it"> HOW IT WORKS</button>
        </div>
        <div className="Purchases display-none">
          <div className="purchase-list">
            <Typography>10k+</Typography>
            <Typography>Cards Sold</Typography>
          </div>
          <div className="purchase-list second-purchase">
            <Typography>5k+</Typography>
            <Typography>Happy Customers</Typography>
          </div>
          <div className="purchase-list">
            <Typography>1.0M+</Typography>
            <Typography>In Card Value</Typography>
          </div>
        </div>
      </div>
      <div className="first-child-home card">
      <div className="top">
      <p>
      Buy Prepaid Cards
      </p>
       
      </div>
      <div className="bottom">
        <div className="bottom-first">
          <label className="label">Enter Prepaid Card Amount</label>
          <div className="input-usd">
            <p>0.00</p>
            <p>USD</p>
          </div>
        </div>
        <div className="bottom-two">
        <div className="block-parent">
        <span className="block-inline">Popular Amounts</span>
        </div>
        <div className="btn-div">
        <button>$25</button>
          <button>$50</button>
          <button>$75</button>
          <button>$100</button>
          <button>$200</button>
        </div>
         
        </div>
        <div className="bottom-third">
      
        <img src={envelope} alt="email" className="email-png"/>
          <input placeholder="Enter Your Email" className="email-input" />
        </div>
        <div className="bottom-fourth">
          <button>
            ORDER NOW
          </button>
        </div>
        <div className="bottom-fifth">
          <div className="fifth-child">
            <span>BTC Exchange Free
            <span className="hide-to-btc">
              <img src={informatio} />
            </span>
            </span>
            <span>1.2 USD</span>
          </div>
          
          <div className="fifth-child">
          <span>Prepaid Card Purchase Price</span>
            <span>1.95 USD</span>
          </div>
          
          <div className="fifth-child">
          <span>Total(Amount in USD) </span>
            <span>20 USD</span>
          </div>
          
          <div className="fifth-child">
          <span>Total(Amount in BTC) </span>
            <span>0.000121 BTC</span>
          </div>
          
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default MidPage;
