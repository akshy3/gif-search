import "./post.css";

import profile from "../images/profile.jpeg"

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={profile}
              alt=""
            />
            <span className="postUsername">Da Vinci</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post?.gifs.map((p,index) => {
            return <img key={index} className="postImg" src={p} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}
