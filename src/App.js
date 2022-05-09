import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Airport } from './airport';
import { Home } from './home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="airports/:id" element={<Airport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
