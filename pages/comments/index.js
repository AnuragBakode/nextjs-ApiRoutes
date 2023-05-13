import React, { useState } from "react";

const Index = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentLoad = async () => {
    const response = await fetch("/api/comments");
    const result = await response.json();
    setData(result);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const deleteComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    handleCommentLoad();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={handleCommentLoad}>Load Comments</button>
      {data.map((d) => {
        return (
          <div key={d.id}>
            <h1>{d.desc}</h1>
            <button onClick={() => deleteComment(d.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
