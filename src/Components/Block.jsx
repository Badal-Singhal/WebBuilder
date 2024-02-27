import React from "react";

export default function Block({ src, text, rating, srctext }) {
  return (
    <div className="componentContainer">
      <div className="mainComponent">
        {/* section 1 */}
        <section className="component1">
          <img src={src} alt="logo" />
          <p>{srctext}</p>
        </section>
        {/* section 2 */}
        <section className="component2">
          <p>{text.paragraph1}</p>
          <strong>{text.paragraph2}</strong>
          <p className={text.list?"contentlist":""}>{text.list?text.list.map((item)=>(
            <div className="listbox" key={item.id}>
            <div className="idblock">{item.id}</div>
            <div>
            : {item.word}
            </div>
             
            </div>
            
          )):""}</p>
          <p>{text.paragraph3}</p>
          <a id="showContent">Show more</a>
        </section>
        {/* section 3 */}
        <section className="component3">
          <div className="ratingbox">
            <p id="rating">{rating.value}</p>
            <p id="abc">{rating.text}</p>
            <img src={rating.img} alt="logo"/>
          </div>
          <div>
            <button className="component-btn">
            View
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
