import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext } from "react";
import {Context} from "../../Store"

export default function Feed() {

  const [posts, setPosts] = useContext(Context)
  console.log(posts)
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.map((p,index) => (
          <Post key={index} post={p} />
        ))}
      </div>
    </div>
  );
}
