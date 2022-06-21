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
        <Character
            name={'Marge'}
            desc={'asdqwe qwe dsa cvbsg'}
            picture={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
        />
        <Character
            name={'Lisa'}
            desc={'asdqwe qwe dsa cvbsg'}
            picture={'https://i.pinimg.com/originals/94/c8/ba/94c8ba735b7846c5e321ff299d0a425a.jpg'}
        />
      <Character
          name={'Magie'}
          desc={'asdqwe qwe dsa cvbsg'}
          picture={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
      />
    </div>
  );
}

export default App;
