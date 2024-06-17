import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Team from './components/Team';
import Value from './components/Value';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
          <Navbar></Navbar> 
          <WelcomeSection></WelcomeSection>
          <Section3></Section3>
           <Section4></Section4>
           <Team></Team>
           <Value></Value>
           <Footer></Footer>
    </div>
  );
}

export default App;
