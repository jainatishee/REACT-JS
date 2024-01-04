/*
Parcel is a BEAST

-Hot Module Reloading (HMR)
-File Watcher Algorithm - C++
-Minify 
-Bundling
-Cleaning our code (Removing console.logs from dist)
-Dev and production buikd
-Super fast build algorithm
-Js optimization
-Image Optimization
-Caching while development
-Compression
-Compatible with older versions of versions
-Enables HTTPS on dev (if we write npx parcel index.html --https)
-Manages port numbers
*/


import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading1 For Parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
