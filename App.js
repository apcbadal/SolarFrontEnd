import React from 'react';
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/redux/reducers'
import { createStore, applyMiddleware } from 'redux'
import Sentry from '@sentry/react-native'
const store = createStore(rootReducer, applyMiddleware(thunk))

Sentry.init({
  dsn: 'https://ad529cc938e742449a8f26f7dc5baabb@o968312.ingest.sentry.io/5919727',
});
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )

}

export default App;
