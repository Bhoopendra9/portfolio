import React from "react";
import "./Service.scss";

function Service({ number, title, desc, data }) {
  return (
    <div className="service-section">
      <div className="serialNumber">{number}</div>
      <div className="title">{title}</div>
      <div className="data-sections">
        {data.map((item, index) => (
          <div className="data-section" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
}

export default Service;
