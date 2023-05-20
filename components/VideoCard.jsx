const VideoCard = ({ m }) => {
  console.log(m)
  const title = m?.Title;
  return (
    <div className="videoCard">
      <div className="poster">
        <img src={m?.Poster} alt="" />
      </div>
      <div className="info">
        <span className="title">
          {title.length >= 74 ? title.slice(0, 60) + "..." : title}
        </span>
        <div className="view_timestamp">
          <span>{m?.Type}</span> • <span>{m?.Year}</span>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
