import React from "react";
import Header2 from "./components2/Header2.jsx";
import Entry from "./components2/Entry.jsx";
import data from "/data.js";

export default function Application2() {
  const details = data.map((detail) => {
    return <Entry key={detail.id} {...detail} />;
  });
  return (
    <>
      <Header2 />
      {details}
    </>
  );
}
