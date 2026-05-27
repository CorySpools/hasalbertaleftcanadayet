import React from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
      <div className="mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto">
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <h1>
          className="col-span-2 row-span-3 animate-spin m-auto"
          style={{ animationDuration: "30s" }}
          src={logo}
          alt="React Logo"
          width="300"
        </h1>
      </div>
    </div>
  );
}

/*
function Button({ className, text, url = "#" }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-purple-400 hover:bg-purple-300 text-purple-800 hover:text-purple-900 block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
  */
