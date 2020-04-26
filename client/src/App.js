import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Library from './pages/Library';
import NotFound from './pages/NotFound';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//   componentDidMount() {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://some-scripturl.js';
//     this.div.appendChild(script);
//   }
//   render() {
//     return (
//       <div className='App' ref={el => (this.div = el)}>
//         <h1>Hello react</h1>
//         {/* Script is inserted here */}
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <div>
        <div className='row'>
          <div className='col s12' id='paddingRemover'>
            <Jumbotron></Jumbotron>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/library' component={Library} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
