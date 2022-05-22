import Post from "../post/Post1";
import Share from "../share/Share1";
import "./feed.css";
import { Posts } from "../../dummyData";
import {useEffect,useState} from "react";
import axios from "axios";

export default function Feed({username}) {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("posts/profile/" + username)
      : await axios.get("posts/timeline/6280f945f2dd5f105ac9258a")
      setPosts(res.data)
    };
    fetchPosts();
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
