import comments from "@/data/comments";
import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id}. {comment.desc}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }, { params: { commentId: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  //   const response = await fetch(
  //     `http://localhost:3000//api/comments/${commentId}`
  //   );
  //   const comment = await response.json();

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
}
