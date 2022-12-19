import logo from './logo.svg';
import './App.css';
import { route } from './router/route';
import { RouterProvider } from 'react-router-dom';


function App() {

  const router = route;
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
