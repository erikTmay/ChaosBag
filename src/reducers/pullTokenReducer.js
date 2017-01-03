import tokenImagePaths from './../images/tokens';
import _ from 'lodash';

const pullToken = (state, action) => {

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
        imagePath: tokenImagePaths[pulledToken.tokenType]
    })

    return Object.assign({}, state, newState);
};


export default pullToken;