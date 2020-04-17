import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";

import FullPost from "../FullPost/FullPost";
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
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          //<Link to={`/posts/${post.id}`} key={post.id}>
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
    return (
      <div>
        <div className={classes.Posts}>{posts}</div>
        <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
