import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import classes from "./Blog.module.css";

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
      });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });

    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
