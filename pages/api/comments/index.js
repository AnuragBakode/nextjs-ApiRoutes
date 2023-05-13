import comments from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: 3,
      desc: comment,
    };

    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
