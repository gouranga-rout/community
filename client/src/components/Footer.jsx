import React from "react";

const Footer = () => {
  return (
    <footer>
      Made with <span>&hearts;</span> By{" "}
      <a href="https://www.instagram.com/gouranga__rout" target="_blank" rel="noopener noreferrer">
        Aaryan
      </a>
      <br />
      &copy; {new Date().getFullYear()} All rights reserved.
    </footer>
  );
};

export default Footer;

