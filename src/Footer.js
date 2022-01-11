import "./index.css";

import React from "react";

function Footer({ length }) {
  return (
    <footer className="footer">
      <p>
        {length} {length === 1 ? "item" : "items"} left
      </p>
    </footer>
  );
}

export default Footer;
