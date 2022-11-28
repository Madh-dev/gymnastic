
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';

function App() {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exerciseDetail/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </Box>

  );
}

export default App;
