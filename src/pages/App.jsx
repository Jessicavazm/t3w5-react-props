// import logo from '../logo.svg';
import '../stylesheets/App.css';

// Import components 
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';

function App() {
  return (
    <div className="App">
      <h1>React Props Lesson</h1>
        <Header />
        <FoodList />
        <Footer /> 
    </div>
  );
}

export default App;
