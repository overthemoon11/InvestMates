import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Simulator } from './Simulator/simulator';
import { Counselling } from './Counselling/counselling';
import { About } from './About/about';
import { NotFound } from './NotFound/notfound';
import { Beginner } from './Academy/BeginnerBasics';
import { Capital } from './Academy/CapitalMarket';
import { Evaluate } from './Academy/EvaluateStock';
import { FinancialIntermediates } from './Academy/FinancialIntermediates';
import { OnlineTrading } from './Academy/OnlineTrading';
import { ViewAll } from './Academy/ViewAll';
import { Company } from './News/Company';
import { Crypto } from './News/Crypto';
import { Financial } from './News/Financial';
import { Government } from './News/Government';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Academy/BeginnerBasics" element={<Beginner />} />
        <Route path="/Academy/CapitalMarket" element={<Capital />} />
        <Route path="/Academy/EvaluateStock" element={<Evaluate />} />
        <Route path="/Academy/FinancialIntermediates" element={<FinancialIntermediates />} />
        <Route path="/Academy/OnlineTrading" element={<OnlineTrading />} />
        <Route path="/Academy/ViewAll" element={<ViewAll />} />
        <Route path="/Simulator/simulator" element={<Simulator />} />
        <Route path="/Counselling/counselling" element={<Counselling />} />
        <Route path="/About/about" element={<About />} />
        <Route path="/News/Company" element={<Company />} />
        <Route path="/News/Crypto" element={<Crypto />} />
        <Route path="/News/Financial" element={<Financial />} />
        <Route path="/News/Government" element={<Government />} />
        <Route path="/About/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
