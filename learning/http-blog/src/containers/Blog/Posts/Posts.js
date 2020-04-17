import React, { Component } from "react";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";
import classes from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((res) => {
        return res.data.slice(0, 4).map((post) => {
          return {
            ...post,
            author: "Nazmul",
          };
        });
      })
      .then((posts) => {
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push(`/${id}`);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          //<Link to={`/${post.id}`} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          //</Link>
        );
      });
    }
    return <div className={classes.Posts}>{posts}</div>;
  }
}

export default Posts;
