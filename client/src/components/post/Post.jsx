// import React from 'react'
// import "./post.css"
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// export default function Post({post}) {
//   const PF = "http://localhost:5000/images/";
//   return (
//     <div className="post">
//         {post.photo}
//               <img
//         className="postImg"
//         src={PF+post.photo} 
//         alt=""
//       />
//       <div className="postInfo">
//         <div className="postCats">
//             {post.categories.map((c)=>(
//             <span className="postCat">  
//              {c.name}
//           </span>
//                 ))
//             }
//         </div>
//         <Link to={`/post/${post._id}`} className="link">
//           <span className="postTitle">{post.title}</span>
//         </Link>
//         <span className="postTitle">
//           <Link to="/post/abc" className="link">
//             {post.title}
//           </Link>
//         </span>
//         <hr/>
//         <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
//       </div>
//       <p className="postDesc">
//         {post.desc}
//       </p>

//     </div>
    
//   )
// }
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}