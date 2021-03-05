import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;

// function DeleteBtn(props) {
//     return <span className="delete-btn material-icons">clear</span>;
//   }

//   export default DeleteBtn;
