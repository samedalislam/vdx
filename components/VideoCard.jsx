const VideoCard = ({ m }) => {
  const title = m?.original_title;
  return (
    <div className="videoCard">
      <div className="poster">
        <img src={`http://image.tmdb.org/t/p/w500${m?.poster_path}`} alt="" />
      </div>
      <div className="info">
        <span className="title">
          {title.length >= 74 ? title.slice(0, 60) + "..." : title}
        </span>
        <div className="view_timestamp">
          <span>{m?.popularity}</span> • <span>{m?.release_date}</span>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
