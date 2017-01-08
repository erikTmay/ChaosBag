import React from 'react';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-addons-test-utils';
import ReduxMockStore from 'redux-mock-store';
import initialState from './reducers/initialState';
import App from './App';

describe('App', () => {
    const mockStore = ReduxMockStore();
	let connectedApp;
    let store;

	beforeEach(function() {
		store = mockStore(initialState);
	});

   describe('renders without crashing', function() {
		beforeEach(function() {
			connectedApp = ReactTestUtils.renderIntoDocument(<Provider store={store}><App/></Provider>);
		});

        it('Selectors', () => {
            const selectorsWrapper = ReactTestUtils.findRenderedDOMComponentWithClass(connectedApp, 'selectors');
            expect(selectorsWrapper).toBeDefined();
        });

        it('Selector', () => {
            const selectors = ReactTestUtils.scryRenderedDOMComponentsWithClass(connectedApp, 'selector');
            expect(selectors.length).toEqual(3);
        });

        it('ChaosBag', () => {
            const ChaosBag = ReactTestUtils.findRenderedDOMComponentWithClass(connectedApp, 'chaos-bag');
            expect(ChaosBag).toBeDefined();
        });

        it('Tokens', () => {
            const tokens = ReactTestUtils.scryRenderedDOMComponentsWithClass(connectedApp, 'token');
            expect(tokens.length).toEqual(16);
        });

        it('TokenPuller', () => {
            const tokenPuller = ReactTestUtils.findRenderedDOMComponentWithClass(connectedApp, 'tokenPuller');
            expect(tokenPuller).toBeDefined();
        });
	});
});
