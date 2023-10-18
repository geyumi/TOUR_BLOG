
// import React, { useContext } from "react"
// import TopBar from "./components/topbar/TopBar";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { Context } from './context/Context';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
//  function App(){
//   const {user}=useContext(Context)

  
//  return (
// <Router>

// <TopBar/>
// <Routes>
// <Route exact path="/" element={<Home />} >
       
//         </Route>
          
//           <Route path="/register" element={user? <Home/> :<Register />} />
//           <Route path="/login" element={user? <Home/> :<Login />} />

//           <Route path="/write" element={user? <Write/> :<Register />}  />
//           <Route path="/settings" element={user? <Settings/> :<Register />}  />
          
//           <Route path="/posts" element={<Home />} />
//           <Route path="/post/:id" element={<Single />} />
          
          
//       </Routes>
 
// </Router>


//   );
// }

// export default App;
 import React, { useContext } from "react"



// import Register from "./pages/register/Register";





import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} >
        
        </Route>
        <Route path="/about" element={<About />} >
        
        </Route>
        <Route path="/register" element={user? <Home/> :<Register />} />
        <Route path="/login" element={user? <Home/> :<Login />} />
        <Route path="/write" element={user? <Write/> :<Register />}  />
        <Route path="/settings" element={user? <Settings/> :<Register />}  />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/posts" element={<Home />} />


      </Routes>
    </Router>
  );
}
// <Route exact path="/" element={<Home />} >
       
//         </Route>
          
//           <Route path="/register" element={user? <Home/> :<Register />} />
//           <Route path="/login" element={user? <Home/> :<Login />} />

//           <Route path="/write" element={user? <Write/> :<Register />}  />
//           <Route path="/settings" element={user? <Settings/> :<Register />}  />
          
//           <Route path="/posts" element={<Home />} />
//           <Route path="/post/:id" element={<Single />} />
          
          

export default App;