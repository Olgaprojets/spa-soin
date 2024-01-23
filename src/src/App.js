import './App.css';
import image from './soin.jpg';
import imageTwo from './massage.jpg';
import { ListSoin } from './ListSoin';
function App() {
  return (
    
    <div className='app'>
      <div className='container'>
      <img src={image} width="200px" alt='spa'/>
      </div>
      <div className='container'>
      <h1>Séjours Thalasso et Spa</h1>
      </div>
      <ListSoin/>
      <div className='container'>
      <img src={imageTwo} width="250px" alt='thalasso'/>
      </div>
    </div>
  );
}

export default App;
