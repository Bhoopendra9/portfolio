import React from "react";
import "./Blogs.scss";
import Section from "../Shared/Section/Section";

import Blogcard from "./Blog-card/Blogcard";

import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import Wrapper from "../Wrapper/Wrapper";

function Blogs() {
  return (
    <Section id="blogs" title="Blogs & Articals" background="dark">
      <Wrapper>
        <div className="blogs-content-wrapper">
          <Blogcard
            user="john die"
            date="nov 8 2022"
            image={Blog1}
            title="lorem dcjajdahdndkasn  jedhdb  idsbsbcishsii sakxnks"
            description="lorem10nvhbvberbveubvaebibvibu hiehfuhhahwdwhfwqf"
          />
          <Blogcard
            user="john die"
            date="nov 8 2022"
            image={Blog2}
            title="lorem dcjajdah dndkasns akxnks"
            description="lorem10nvhbvberbveubvaebibvibu hiehfuhhahwdwhfwqf"
          />
          <Blogcard
            user="john die"
            date="nov 8 2022"
            image={Blog3}
            title="lorem dcjajdahdndkasnsakxnks"
            description="lorem10nvhbvberbveubvaebibvibu hiehfuhhahwdwhfwqf"
          />
        </div>
      </Wrapper>
    </Section>
  );
}

export default Blogs;
