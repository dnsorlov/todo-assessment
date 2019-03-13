import React            from 'react'
import { render }       from 'react-dom'
import { createStore }  from 'redux'
import { Provider }     from 'react-redux'
import reducer          from './redux/reducers'
import App              from './components/App'

import 'normalize.css'
import './index.styl'

const store = createStore(reducer);

const withProvider =
    <Provider store={store}>
        <App />
    </Provider>;

render( withProvider, document.getElementById('root') );
