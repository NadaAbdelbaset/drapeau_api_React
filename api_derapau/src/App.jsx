import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/news" element={<News />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App