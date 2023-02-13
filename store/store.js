import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { combineReducers } from 'redux'


const formData = (state = { name: '',  phone: '', email: '' }, action) => {
    console.log(state);
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return { ...state, ...action.payload }
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    formData
  })

const store = createStore(rootReducer)


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

