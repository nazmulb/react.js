import Link from "next/link";
import Layout from "../components/layout/Layout";

const Home = (props) => {
  return (
    <Layout>
      <h1 className="title">Welcome to my website.</h1>

      <p className="description">
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page</a>
        </Link>
      </p>
    </Layout>
  );
};

export default Home;
