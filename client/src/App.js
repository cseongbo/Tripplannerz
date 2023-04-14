import React,{Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

import StartPage from './components/StartPage/StartPage';
import MainPage from './components/MainPage/MainPage';
import SchedulePage from './components/SchedulePage/SchedulePage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path ="/" element={<StartPage />} />
          <Route path ="/main" element={<MainPage />} />
          <Route path ="/schedule" element={<SchedulePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
