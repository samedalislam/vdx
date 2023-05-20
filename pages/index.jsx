import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const Home = ({movies}) => {
  return (
    <>
      <Head>
        <title>VDX | Video Sharing Platform</title>
      </Head>
      <div className="home">
        <Sidebar />
        <Feed movies={movies} />
      </div>
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=e8699f24&s=titanic`
  );
  const data = await res.json();

  return {
    props: { movies: data.Search },
  };
}
