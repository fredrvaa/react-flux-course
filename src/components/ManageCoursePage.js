import React from "react";

function ManageCoursePage(props) {
  return (
    <>
      <h2>Mange Course</h2>
      <h3>{props.match.params.slug} </h3>
    </>
  );
}

export default ManageCoursePage;
