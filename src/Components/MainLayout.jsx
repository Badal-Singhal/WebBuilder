import React from "react";
import Block from "./Block";
import WebBuilder from "./WebBuilder";

export default function MainLayout() {
  const WebData=[
    {
      src: "./Block1.png",
      offer:{
        offer1:"20% off",
        offer2: "Limited time"
      },
      heading:"WebBuilder1",
      text:"Computer Modern clasic with wix support",
      offer_price:"$ 39.96",
      original_price:"$49.96",
    },
    {
      src: "./Block2.png",
      offer:{
        offer1:"20% off",
        offer2: "Limited time"
      },
      heading:"WebBuilder1",
      text:"Computer Modern clasic with wix support",
      offer_price:"$ 39.96",
      original_price:"$49.96",
    },
    {
      src: "./Block3.png",
      offer:{
        offer1:"20% off",
        offer2: "Limited time"
      },
      heading:"WebBuilder1",
      text:"Computer Modern clasic with wix support",
      offer_price:"$ 39.96",
      original_price:"$49.96",
    },
  ]
  const blockData = [
    {
      src: "./Block1.png",
      srctext: "Builder 1",
      text: {
        paragraph1:
          "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        paragraph2: "Main highlights",
        paragraph3:
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      },
      rating: {
        value: 9.8,
        text: "Exceptional",
        img: "./fullStar.png",
      },
    },
    {
      src: "./Block2.png",
      srctext: "Builder",
      text: {
        paragraph1:
          "SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        paragraph2: "Main highlights",
        paragraph3:
          "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      },
      rating: {
        value: 9.5,
        text: "Excellent",
        img: "./fullStar.png",
      },
    },
    {
      src: "./Block3.png",
      srctext: "Builder 1",
      text: {
        paragraph1:
          "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        paragraph2: "Main highlights",
        paragraph3:
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      },
      rating: {
        value: 9.3,
        text: "Exceptional",
        img: "./star9.3.png",
      },
    },
    {
      src: "./Block3.png",
      srctext: "CDK",
      text: {
        paragraph1:
          "CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides",
        paragraph2: "Main highlights",
        list: [
          {
            id: 9.9,
            word: "Building Responsive",
          },
          {
            id: 8.9,
            word: "Cool",
          },
          {
            id: 8.9,
            word: "Docs",
          },
        ],
        paragraph3:
          "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      },
      rating: {
        value: 9.1,
        text: "Very Good",
        img: "./star9.1.png",
      },
    },
  ];

  return (
    <div className="hero-section">
      <div className="heading">
        <p>Best Website builders in the US</p>
      </div>
      <div className="horizontalRow">
        <hr />
      </div>

      <div className="status-section">
        <div className="container">
          <div className="icon">
            <img src="./Check.png" alt="logo" />
          </div>
          <div>
            <p>Last updated - [Date]</p>
          </div>
          <div className="icon">
            <img src="./i-icon.png" alt="logo" />
          </div>
          <div>
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="container">
          <div>
            <p id="abc">Top relevant</p>
          </div>
          <div className="icon">
            <img src="feature.png" alt="logo" />
          </div>
        </div>
      </div>
      <div className="horizontalRow">
        <hr />
      </div>
      <div className="buttons">
        <button className="btn">Tools</button>
        <button className="btn">AWS Builder</button>
        <button className="btn">Start Build</button>
        <button className="btn">Build Supplies</button>
        <button className="btn">Tooling</button>
        <button className="btn">BlueHosting</button>
      </div>
      <div className="abcd">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Home</span>
          <span className="breadcrumb-item">Hosting for all</span>
          <span className="breadcrumb-item">Hosting</span>
          <span className="breadcrumb-item">Hosting6</span>
          <span className="breadcrumb-item">Hosting 5</span>
        </div>
      </div>

      {blockData.map((item, index) => (
        <Block
          key={index}
          src={item.src}
          srctext={item.srctext}
          text={item.text}
          rating={item.rating}
        />
      ))}

      <p className="heading2">Related deals you might like for</p>
      <div className="webGrid">
      {WebData.map((item, index) => (
        <WebBuilder
          key={index}
          src={item.src}
          heading={item.heading}
          text={item.text}
          offer={item.offer}
          offer_price={item.offer_price}
          original_price={item.original_price}
        />
      ))}
      </div>
      <div className="signup">
      <div className="signBox">
        <p>Sign up and get exclusive special deals</p>
      </div>
      <div>
        <input className="input-box"type="box"/>
        <button className="sign-btn"> Sign Up</button>
      </div>
      </div>
      
      
      

    </div>
  );
}
