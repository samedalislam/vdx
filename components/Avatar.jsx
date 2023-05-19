const Avatar = ({ image, size }) => {
  return (
    <img
      className="avatar"
      src={image}
      width={size === "md" ? 50 : size === "sm" ? 40 : 27}
      height={size === "md" ? 50 : size === "sm" ? 40 : 27}
    />
  );
};
export default Avatar;
