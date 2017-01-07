import Actions from './../actions/actions';
import initialState from './initialState';
import tokenImagePaths from './../images/tokens';
import uuidV4  from 'uuid/v4';
import _ from 'lodash';

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.PULL_TOKEN:
            const flattenedTokenBag = [];
            _.each(state.tokens, (value, name) => {
                if(value > 0) {
                    _.each(_.range(value), function(num, index) {
                        flattenedTokenBag.push({
                            tokenType: name
                        });
                    });
                }
            });

            if(_.isEmpty(flattenedTokenBag)) {
                return state;
            }

            const tokenIndexToPull = _.random(0, flattenedTokenBag.length-1);
            const pulledToken = _.pullAt(flattenedTokenBag, tokenIndexToPull)[0];
            const newState = _.cloneDeep(state);

            newState.tokens[pulledToken.tokenType] -= 1;
            newState.revealedTokens.push({
                type: pulledToken.tokenType,
                imagePath: tokenImagePaths[pulledToken.tokenType],
                id: uuidV4()
            })

            return Object.assign({}, state, newState);
        default:
            return state;
    }
};
