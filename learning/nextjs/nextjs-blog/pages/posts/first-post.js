import Link from "next/link";
import Layout from "../../components/layout/Layout";

const FirstPost = (props) => {
  return (
    <Layout>
      <h1 className="title">First Post</h1>

      <p className="description">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default FirstPost;
