const title = "Three Stooges difficult berojdari | Bangla Funny Dubbing | Bangla Funny Video | Khamoka tv"

const VideoCard = () => {
  return (
    <div className="videoCard">
        <div className="poster">
            <img src="https://i.ytimg.com/vi/U_9LKkk1AYY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsEG7uhe1sqHyl7c1YqzKrw8Qv-w" alt="" />
        </div>
        <div className="info">
            <span className="title">{title.length >= 74 ? title.slice(0, 60) + "..." : title}</span>
            <div className="view_timestamp">
                <span>1.2M views</span> • <span>3 days ago</span>
            </div>
        </div>
    </div>
  )
}
export default VideoCard