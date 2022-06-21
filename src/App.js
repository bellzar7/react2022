import './App.css';
import Character from "./components/characters/Character";

function App() {
  return (
    <div  >
      <Character
      name={'BART'}
      desc={'lorem10'}
      picture={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
      />
        <Character
        name={'Homer'}
        desc={'asdqwe qwe dsa cvbsg'}
        picture={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
        />
    </div>
  );
}

export default App;
