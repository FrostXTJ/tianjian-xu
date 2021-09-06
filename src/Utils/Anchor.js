import React from "react";

const Anchor = ({href, children}) => (
  <a
    className="anchor"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default Anchor;
