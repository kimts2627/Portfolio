import './style/App.scss';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './container/MainContainer';
import Landing from './component/Landing';
import AboutMeContainer from './container/AboutMeContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/main' component={MainContainer} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/aboutme' component={AboutMeContainer} />
      </Switch>
    </div>
  );
}

export default App;
