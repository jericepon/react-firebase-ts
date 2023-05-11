import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <header>
        <nav className="flex justify-center px-3 bg-slate-50 text-black">
          <Link to="/" className="px-2 py-3 hover:bg-slate-200">
            🏠Home
          </Link>
          <Link to="posts" className="px-2 py-3 hover:bg-slate-200">
            📰 Posts
          </Link>
          <Link to="about" className="px-2 py-3 hover:bg-slate-200">
            ℹ️ About
          </Link>
        </nav>
      </header>
      <main className="px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
