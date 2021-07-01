import React from 'react';
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers'
import { createStore, applyMiddleware } from 'redux'
const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )

}




export default App;
