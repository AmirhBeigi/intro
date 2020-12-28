import Layout from "../components/layout";
import Avatar from "../components/avatar";
import Intro from "../components/intro";
import Social from "../components/social";

const Home = () => {
  const socials = {
    GitHub: "https://github.com/amirhbeigi",
    LinkeIn: "https://linkedin.com/in/amirhbeigi",
    Twitter: "https://Twitter.com/amirhbeigi",
  };

  return (
    <Layout>
      <Avatar src="/images/me.jpg" />
      <Intro name="Amirhossein Beigi" skill="Front End Developer" />
      <Social src={socials} />
    </Layout>
  );
};

export default Home;
