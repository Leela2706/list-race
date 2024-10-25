import logo from './logo.svg';
import './App.css';
import HeaderTop from './Components/HeaderTop';
import TopArea from './Components/TopArea';
import Hero from './Components/Hero';
import ListTopics from './Components/ListTopics';
import Works from './Components/Works';
import Explore from './Components/Explore';
import Reviews from './Components/Reviews';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';
import Subscription from './Components/Subscription';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <HeaderTop/>
     <TopArea/>   
     <Hero/>
     <ListTopics/>
     <Works/>
     <Explore/>
     <Reviews/>
     <Statistics/>
     <Blog/>
     <Subscription/>
     <Footer/>
    </div>
  );
}

export default App;
