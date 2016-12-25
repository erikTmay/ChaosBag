import React from 'react';
import Token from './Token';
import TokenDefinitions from './TokenDefinitions';

class Tokens extends React.Component {
     constructor() {
        super();
        this.state = {
            plusOneAmount: 0
        };
    }

    handleTokenAmountChange(newAmount) {
        this.setState({
            plusOneAmount: newAmount
        })
    }

    render() {
        return (
            <Token
                tokenImageAlt={TokenDefinitions.PLUS_ONE.imageAlt}
                tokenImagePath={TokenDefinitions.PLUS_ONE.imagePath}
                setTokenAmount={this.handleTokenAmountChange.bind(this)}
                amount={this.state.plusOneAmount}
            />
        );
    }
}

export default Tokens;
