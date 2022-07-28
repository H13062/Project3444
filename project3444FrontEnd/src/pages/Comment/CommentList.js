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
            {console.log("This is comments dit me: ", comments)}
            <tr className="comment-list" key={comments[key].id}>
              <th scope="row">{comments[key].id}</th>
              <td>{comments[key].description}</td>
              <td>{comments[key].dateTime.toString().substring(0, 10)}</td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default CommentList;
