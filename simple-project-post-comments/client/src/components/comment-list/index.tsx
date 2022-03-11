import React, { useState, useEffect } from "react";
import axios from "axios";

// import { Container } from './styles';

const CommentList: React.FC<{postId : number}> = ({children, postId}) => {
console.log("🚀 ~ file: index.tsx ~ line 7 ~ postId", postId)

    const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:3001/${postId}/comments`
    );

    console.log(res.data);

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment : any) => {
    console.log(comment);
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}

export default CommentList;