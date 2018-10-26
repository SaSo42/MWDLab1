import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import { Provider } from "react-redux";
import NumberPanels from "./Components/NumberPanels";
import store from "./store";
import Operations from "./Components/Operations";


ReactDom.render(
    <Provider store={store}>
        <div>
            <div>
                <App input={store.getState()} />
            </div>
            <div>
                <NumberPanels store={store} />
            </div>
            <div>
                <Operations />
            </div>
        </div>
    </Provider>,
    document.getElementById('main')
);
