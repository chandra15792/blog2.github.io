import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
function Single() {
  return (
    <div className="single">
    <SinglePost/>
    <Sidebar/>
    </div>
  )
}

export default Single