import VideoCard from "./VideoCard"

const Feed = ({movies}) => {
  // console.log(movies)
  return (
    <div className="feed">
      {
        movies.map((m, i) => <VideoCard key={i} m={m} />)
      }
    </div>
  )
}
export default Feed