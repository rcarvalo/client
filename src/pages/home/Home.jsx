import Topbar from "../../components/topbar/Topbar1";
import Sidebar from "../../components/sidebar/Sidebar1";
import Feed from "../../components/feed/Feed1";
import Rightbar from "../../components/rightbar/Rightbar1";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}