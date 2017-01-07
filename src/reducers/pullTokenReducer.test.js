import Actions from './../actions/actions';
import pullTokenReducer from './pullTokenReducer';
import initialState from './initialState';
import _ from 'lodash';

describe('Pull Token Reducer', () => {
    it('Should return the initial state when state is undefined.', () => {
        expect(pullTokenReducer(undefined, {})).toEqual(initialState);
    });

    it('Should remove 1 token.', () => {
        const expectedTokenNumber = 15;
        const expectedRevealedTokensNumner = 1;
        const newState = pullTokenReducer(undefined, { type: Actions.PULL_TOKEN });

        const numberOfTokens = _.reduce(newState.tokens, (result, value) => {
            return result + value;
        }, 0);

        expect(numberOfTokens).toEqual(expectedTokenNumber);
        expect(newState.revealedTokens.length).toEqual(expectedRevealedTokensNumner);
    });
});
