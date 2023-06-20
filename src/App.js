import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import {Header} from './comp/header';
import {Home} from './comp/home';
import {About} from './comp/about';
import {Contact} from './comp/contact';
import {Project} from './comp/project'
import {FullStack} from './comp/full_stack';
import { DeepLearning} from './comp/dl';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Project />
      <FullStack />
      <DeepLearning />
    </div>
  );
}

export default App;
