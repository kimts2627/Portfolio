import './style/App.scss';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './container/MainContainer';
import Landing from './component/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/main' component={MainContainer} />
        <Route exact path='/' component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
