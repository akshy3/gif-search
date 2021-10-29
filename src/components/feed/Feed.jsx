import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext } from "react";
import {Context} from "../../Store"

export default function Feed() {

  // eslint-disable-next-line 
  const [posts, setPosts] = useContext(Context)
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
