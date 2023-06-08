import React from "react";

function card(props) {
  return (
    <div className="card">
      <h1 class="card-title">{props.title}</h1>
      <h2 class="card-content">{props.content}</h2>
    </div>
  );
}



export default card;
