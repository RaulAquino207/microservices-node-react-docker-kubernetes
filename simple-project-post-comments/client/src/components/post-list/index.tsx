import React, { useState, useEffect }from 'react';
import axios from 'axios';
import CommentList from '../comment-list';
import CommentCreate from '../comment-create';

// import { Container } from './styles';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ fetchPosts ~ res", res.data)

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post : any) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.content}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}

export default PostList;