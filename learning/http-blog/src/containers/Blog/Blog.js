import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import classes from "./Blog.module.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
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
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
