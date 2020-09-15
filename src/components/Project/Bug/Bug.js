import React from "react";

function Bug(props) {
  const { priority, title } = props.props.bug.bug;

  return (
    <div>
      Priority: {priority} <br></br>
      Title: {title}
    </div>
  );
}

export default Bug;
