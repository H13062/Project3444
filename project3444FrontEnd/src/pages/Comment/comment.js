import React, { useEffect, useState } from "react";
import "./comment.css";
import { Table } from "reactstrap";
import { images } from "../../constants";
import { Navbar } from "../../component";
import CommentList from "./CommentList";
const Comment = () => {
  // useState for comment submit properties
  const [description, setDescription] = useState("");

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

  const onCommentSubmitHandler = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    fetch("https://localhost:7169" + apiServerEndpoint + "comment", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: description, dateTime: currentDate }),
    }).then(() => {
      console.log("new comment added");
    });
  };

  return (
    <div className="app__comment">
      <Navbar />
      <div className="app__comment-header">
        <h1>Comment</h1>
        <p>Let us know about our experience</p>
      </div>
      <div className="app__comment-field">
        <div className="app__comment-field_input">
          <h2>Write your comment</h2>
          <form onSubmit={onCommentSubmitHandler}>
            <textarea
              type="text"
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <button>Add Comment</button>
          </form>
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
