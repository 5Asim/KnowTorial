
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './section/Home/Home';

function App() {
  return (
  <BrowserRouter>
    <div>
      <section>
     
      </section>
      <section>
        <Home/>
      </section>
    </div>
  </BrowserRouter>
  );
}

export default App;
