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
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="./" element= {<Home />} />
      </Routes>
      <Routes>
        <Route path="./about" element= {<About />} />
      </Routes>
      <Routes>
        <Route path="./contact" element= {<Contact />} />
      </Routes>
      <Routes>
        <Route path="./project" element= {<Project />} />
      </Routes>
      <Routes>
        <Route path="./fullstack" element= {<FullStack />} />
      </Routes>
      <Routes>
        <Route path="./dl" element= {<DeepLearning />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
