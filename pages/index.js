import Layout from "../components/layout";
import Avatar from "../components/avatar";
import Intro from "../components/intro";

const Home = () => {
  return (
    <Layout>
      <Avatar src="/images/me.jpg" />
      <Intro name="Amirhossein Beigi" skill="Front End Developer" />
    </Layout>
  );
};

export default Home;
