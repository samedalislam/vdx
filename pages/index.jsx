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
    `https://api.themoviedb.org/3/discover/movie?api_key=9e15a513af79e165ed3ac970310ce0c2`
  );
  const data = await res.json();

  return {
    props: { movies: data.results },
  };
}
