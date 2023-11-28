import { useEffect } from 'react';
import './App.css';
import WeatherApp from './Components/WeatherApp/WeatherApp';

function App() {

  useEffect(()=>{
    alert('A change in the weather is sufficient to recreate the world and ourselves.')
  })
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
