import { createStore } from 'redux';
import { Provider } from 'react-redux';
import infoReducer from './redux/reducers';

const store = createStore(infoReducer);

export default store;