import React from "react";
import "./Portfolio.scss";
import { useState } from "react";

import Filters from "./Filters/Filters";
import Showcase from "./Showcase/Showcase";
import Wrapper from "../Wrapper/Wrapper";

const projectsData = [
  {
    id: 1,
    name: "Healthy Food Restraunt",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-7.jpg"),
    },
  },
  {
    id: 2,
    name: "Anna & Daniel",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.jpg"),
    },
  },
  {
    id: 3,
    name: "Web Design Landing Page",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-8.jpg"),
    },
  },
  {
    id: 4,
    name: "Business Analytics Web App",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    },
  },
  {
    id: 5,
    name: "Limitless",
    tags: ["web-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    },
  },
  {
    id: 6,
    name: "Dashboard",
    tags: ["product", "web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-4.jpg"),
    },
  },
  {
    id: 7,
    name: "Digital Creative Agency",
    tags: ["web-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-3.jpg"),
    },
  },
  {
    id: 8,
    name: "Virtual Reality Experience",
    tags: ["web-app", "mobile-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-5.jpg"),
    },
  },
];

function Portfolio() {
  const [projects, setprojects] = useState(projectsData);
  const [transition, settransition] = useState(false);

  const filterprojects = (tag) => {
    settransition("zoomout");

    setTimeout(() => {
      if (tag !== "all") {
        const filteredprojects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setprojects(filteredprojects);
      } else {
        setprojects(projectsData);
      }
      settransition("zoomin");
    }, 200);

    setTimeout(() => {
      settransition(false);
    }, 600);
  };

  return (
    <div id="portfolio" className="project-container">
      <Wrapper>
        <div className="main-heading">
            <h1>Latest Projects</h1>
        </div>
        <div className="portfolio-content-wrapper">
          <Filters filterprojects={(tag) => filterprojects(tag)} />
          <Showcase data={projects} transition={transition} />
        </div>
      </Wrapper>
    </div>
  );
}

export default Portfolio;
