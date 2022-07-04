import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';
import Contact from './components/contact';
import Resume from './components/resume';

function App() {
  return (
    <div>
     <Header></Header>
     <Navbar></Navbar>
     <Body></Body>
     <Contact></Contact>
     <Resume></Resume>
     <Footer></Footer>
    </div>
  );
}

export default App;
