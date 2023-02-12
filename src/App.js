import Superhero from './components/Superhero';
import './components/Superhero.css'
import './App.css';
import superheroes from './heroes'

function App() {
  return (
    <div className="App">
      {
        superheroes.map((hero) =>
          <Superhero
            key={hero.id.toString()}
            name={hero.name}
            url={hero.url}
            alt={hero.alt}
            universe={hero.universe}
            alter={hero.alter_ego}
            occupation={hero.occupation}
            friends={hero.friends}
            powers={hero.superpowers}
            text={hero.details}
          />
        )
      }
    </div>
  );
}

export default App;
