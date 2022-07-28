import React, { useEffect, useState } from "react";
import "./comment.css";
import { Table } from "reactstrap";
import { images } from "../../constants";
import { Navbar } from "../../component";
import CommentList from "./CommentList";
const Comment = () => {
  const [comments, setComments] = useState(null);
  const apiServerEndpoint = "/api/";
  useEffect(() => {
    fetch("https://localhost:7169" + apiServerEndpoint + "comment", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, []);

  return (
    <div className="app__comment">
      <Navbar />
      <div className="app__comment-header">
        <h1>Comment</h1>
        <p>Let us know about our experience</p>
      </div>
      <div className="app__comment-field">
        <div className="app__comment-field_input">
          <textarea placeholder="Give us your comment on the rerstaurant" />
          <button type="submit">Post Comment</button>
        </div>

        <div className="comment-dash"></div>

        <div className="app__comment-field_">
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Date Time</th>
              </tr>
            </thead>
            <tbody>
              {comments && <CommentList comments={comments}></CommentList>}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Comment;
