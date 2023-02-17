import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Checkout from "./Components/Checkout";

import {  Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/checkout">
//             <Header/>
//             <Checkout />
//           </Route>

//           <Route path="/">
//             <Header/>
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
