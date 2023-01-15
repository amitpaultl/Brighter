import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Brighter/Route/Route';

function App() {
  return (
    <div className='max-wide'>
      <RouterProvider router={Route}>

      </RouterProvider>
    </div>
  );
}

export default App;
