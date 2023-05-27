import './App.css';
import GymPlans from './components/GymPlans/GymPlans';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
function App() {
  return (
    <div className="App">
          {/* <span style={{color: 'white'}}>Subscribe Zainkeepscode</span> */}
          <Hero/>
          <Programs/>
          <Reasons/>
          <GymPlans/>
    </div>
  );
}

export default App;
