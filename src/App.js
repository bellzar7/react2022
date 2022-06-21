import './App.css';
import Character from "./components/character/Character";


function App() {
    return (
        <div>
              <Character
              name={'long Hair Rick'}
              id={818}
              status={'unknown'}
              species={'Human'}
              gender={'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/818.jpeg'}
              />
          <Character
              name={'Piece of Toast'}
              id={266}
              status={'Alive'}
              species={'unknown'}
              gender={'Genderless'}
              image={'https://rickandmortyapi.com/api/character/avatar/266.jpeg'}
          />
          <Character
              name={'Jackey'}
              id={764}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/764.jpeg'}
          />
        </div>
    );
}

export default App;
