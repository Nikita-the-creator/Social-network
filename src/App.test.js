import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Redux/redux-store";
import React from "react";
import { unmountComponentAtNode } from "react-dom";

test('renders learn react link', () => {
    const div = document.createElement('div')
   render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, div);
   unmountComponentAtNode(div)
});
