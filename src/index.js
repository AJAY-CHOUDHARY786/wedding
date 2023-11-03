import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Ourwork from "./Pages/Ourwork";
import Home from "./Pages/Home";
import Weddingpics from "./Pages/Weddingpics";
import Footer from "./Component/Footer";
import Blogs from "./Pages/Blogs";
import Destination from "./Pages/Destination";
//  import Section1 from "./Pages/Section1";\
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Testimoniol from "./Pages/Testimoniol";
import Bestwed from "./Pages/Bestwed";
import Thai from "./Pages/Thai";
import Dubai from "./Pages/Dubai";
import Baku from "./Pages/Baku";
import Singapore from "./Pages/Singapore";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="Weddingpics" element={<Weddingpics />} />
        <Route path="Blogs" element={<Blogs/>} />
        <Route path="Ourwork" element={<Ourwork />} />
        <Route path="Home" element={<Home />} />
        <Route path="International-wedding" element={<Destination/>} />
        <Route path="Services" element={<Service/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="About" element={<About/>} />
        <Route path="Testimoniol" element={<Testimoniol/>} />
        <Route path="Best-wedding-planner" element={<Bestwed/>} />
        <Route path="Thai" element={<Thai/>} />
        <Route path="Dubai" element={<Dubai/>} />
        <Route path="Baku" element={<Baku/>} />
        <Route path="Singapore" element={<Singapore/>} />
      




        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);