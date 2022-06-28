import './App.css';
import Users from "./components/users/Users";
/*
з jsonplaceholder відрендерити  інформацію про users,posts, comments
зліва всі юзери, зправа  всі пости
і знизу всі коментарі*/


function App() {
  return (
    <div >
      <Users/>
    </div>
  );
}

export default App;
