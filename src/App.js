import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FilmCard from './components/FilmCard';

function App() {
  return (
    <div>
      <Navbar/>
      <div class="myrow">
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
        <FilmCard class="col"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
