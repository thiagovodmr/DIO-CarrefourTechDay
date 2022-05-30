import './App.css';
import Router from '../../router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../../redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
}

export default App;
