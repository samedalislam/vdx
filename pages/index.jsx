import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>VDX | Video Sharing Platform</title>
      </Head>
      <div className="home">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};
export default Home;
