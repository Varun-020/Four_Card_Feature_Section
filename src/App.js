import './App.css';
import Cards from './Cards';

function App() {
  const card1={
    heading:'Supervisor',
    desc:'Monitors activity to identify project roadblocks',
    image:'icon-supervisor.svg',
    class:'card1 cards'
  }
  
  const card2={
    heading:'Team Builder',
    desc:'Scans our talent to create the optimal team for your project',
    image:'icon-team-builder.svg',
    class:'card2 cards'
  }
  const card3={
    heading:'Karma',
    desc:'Regularly evaluates our talent to ensure quality',
    image:'icon-karma.svg',
    class:'card3 cards'
  }
  const card4={
    heading:'Calculator',
    desc:'Uses data from past projects to provides better delivery estimates',
    image:'icon-calculator.svg',
    class:'card4 cards'
  }
  return (
    <div className="app">
      
      <h2 className="heading">Reliable, efficient delivery</h2>
      <h1 className="mainHeading">Powered by Technology</h1>
      <p className="para">Our Artificial Intelligence powered tools use millions of project
        data points to ensure that your project is successful </p>
      <div className="cardContainer">
        <Cards props={card1}/>
        <div className="mid">
        <Cards props={card2}/>
        <Cards props={card3}/>
        </div>
        <Cards props={card4}/>
        
      </div>
      
    </div>
  );
}

export default App;
