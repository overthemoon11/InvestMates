import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { RegistrationPage } from './General/register';
import { SignIn } from './General/signIn';
import { Simulator } from './Simulator/simulator';
import { Counselling } from './Counselling/counselling';
import { Beginning } from './Counselling/beginning';
import { Trading } from './Counselling/trading';
import { About } from './About/about';
import { NotFound } from './NotFound/notfound';
import { Beginner } from './Academy/BeginnerBasics';
import { Capital } from './Academy/CapitalMarket';
import { Evaluate } from './Academy/EvaluateStock';
import { FinancialIntermediates } from './Academy/FinancialIntermediates';
import { OnlineTrading } from './Academy/OnlineTrading';
import { Company } from './News/Company';
import { Crypto } from './News/Crypto';
import { Financial } from './News/Financial';
import { Government } from './News/Government';
import { PartnerWebsite } from './Counselling/partnerWebsite';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Set Academy/BeginnerBasics as the root path */}
          <Route path="/" element={<><NavBar /><Beginner /></>} />

          <Route path="/General/signIn" element={<SignIn />} />
          <Route path="/General/register" element={<RegistrationPage />} />
          <Route path="/Counselling/partnerWebsite" element={<PartnerWebsite />} />

          <Route path="/Academy/BeginnerBasics" element={<><NavBar /><Beginner /></>} />
          <Route path="/Academy/CapitalMarket" element={<><NavBar /><Capital /></>} />
          <Route path="/Academy/EvaluateStock" element={<><NavBar /><Evaluate /></>} />
          <Route path="/Academy/FinancialIntermediates" element={<><NavBar /><FinancialIntermediates /></>} />
          <Route path="/Academy/OnlineTrading" element={<><NavBar /><OnlineTrading /></>} />

          <Route path="/Simulator/simulator" element={<><NavBar /><Simulator /></>} />

          <Route path="/Counselling/counselling" element={<><NavBar /><Counselling /></>} />
          <Route path="/Counselling/beginning" element={<><NavBar /><Beginning /></>} />
          <Route path="/Counselling/trading" element={<><NavBar /><Trading /></>} />

          <Route path="/News/Company" element={<><NavBar /><Company /></>} />
          <Route path="/News/Crypto" element={<><NavBar /><Crypto /></>} />
          <Route path="/News/Financial" element={<><NavBar /><Financial /></>} />
          <Route path="/News/Government" element={<><NavBar /><Government /></>} />
          <Route path="/About/about" element={<><NavBar /><About /></>} />
          <Route path="*" element={<><NavBar /><NotFound /></>} />
        </Routes>

        <Footer />
      </AuthProvider>


    </Router>


  );
}

export default App;
