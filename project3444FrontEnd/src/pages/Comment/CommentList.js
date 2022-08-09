import React from "react";
import Datetime from "react-datetime-picker";

const CommentList = ({ comments }) => {
  const convertDateToString = (item) => {
    var d = new Date(item);
    var dt = d.toLocaleTimeString();
    return dt;
  };
  return (
    <>
      {Object.keys(comments).map((key) => {
        return (
          <>
            <div className="table-desc">
              <p>"{comments[key].description}"</p>
            </div>
            <div className="table-date">
              <p>-{comments[key].dateTime.toString().substring(0, 10)}</p>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
};

export default CommentList;
