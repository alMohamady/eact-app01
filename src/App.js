import logo from './logo.svg';
import './App.css';

function App() {
  const str = 'world 2023 - 1';

  function getName(name){
     return <h1>Hello {name}</h1>
  }

  return (
    <div className="App">
          {getName(str)}
    </div>
  );
}

export default App;
