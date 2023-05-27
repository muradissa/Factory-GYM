import './App.css';
import Footer from './components/Footer/Footer';
import GymPlans from './components/GymPlans/GymPlans';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Results from './components/Results/Results';
import Schedule from './components/Schedule/Schedule';
function App() {
  return (
    <div className="App">
          {/* <span style={{color: 'white'}}>Subscribe Zainkeepscode</span> */}
          <Hero/>
          <Programs/>
          <Reasons/>
          <Results/>
          <Schedule/>
          <GymPlans/>
          <Footer/>
    </div>
  );
}

export default App;
