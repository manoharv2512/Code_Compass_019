import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TripPlan from './components/tripPlan/TripPlan'
function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<TripPlan />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
    </Routes>
    </div>
  );
}

export default App;

