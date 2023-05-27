import './App.css';
import GymPlans from './components/GymPlans/GymPlans';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Results from './components/Results/Results';
function App() {
  return (
    <div className="App">
          {/* <span style={{color: 'white'}}>Subscribe Zainkeepscode</span> */}
          <Hero/>
          <Programs/>
          <Reasons/>
          <Results/>
          <GymPlans/>
    </div>
  );
}

export default App;
