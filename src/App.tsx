import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeScreen } from "pages/HomeScreen";
import { NewRoom } from "pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/rooms/new" element={<NewRoom/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;