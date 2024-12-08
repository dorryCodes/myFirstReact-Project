import React from "react";

const Joke = (Prop) => {
  return (
    <div>
      <p style={{ display: Prop.setup ? "block" : "none", color: "blue" }}>
        setup: {Prop.setup}
      </p>
      <p style={{ color: "#F43596" }}> punchline:{Prop.punchline}</p>
      <p>{Prop.upvotes}</p>
      <hr />
    </div>
  );
};

export default Joke;
