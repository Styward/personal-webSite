// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import {BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Home from "./pages/home/Home";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


const App: React.FC = ()=>{

  return(

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
         {/* <Route path="/" element={<MainLayout><Home/><AbautMe/></MainLayout>}></Route>  */}
      </Routes>
    </Router>
  );
};

// const BackgroundManager: React.FC =()=>{
//   const location = useLocation();

//   useEffect(()=>{

//     if(location.pathName ==='/home'){
//       document.body.classList.add('home');

//     }

//   },[location.pathName])

// };


export default App