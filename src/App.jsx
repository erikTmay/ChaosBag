import React from 'react';
import { connect } from 'react-redux';
import {
    changeCampaign,
    changeScenario,
    changeDifficulty,
    changeTokenAmount,
    onPullToken,
    onRevealedTokenClick
} from './actions/actionCreators';
import './app.css';
import Selectors from './components/selectors/Selectors';
import ChaosBag from './components/chaosBag/ChaosBag';
import TokenPuller from './components/tokenPuller/TokenPuller';

const App = (props) => {
    return (
        <div className="app">
            <div className="app-header">
                <h1>Chaos Bag</h1>
            </div>
            <Selectors {...props} />
            <ChaosBag {...props} />
            <TokenPuller {...props} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedCampaignName: state.selectedCampaignName,
        selectedScenarioName: state.selectedScenarioName,
        selectedDifficulty: state.selectedDifficulty,
        tokens: state.tokens,
        revealedTokens: state.revealedTokens
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCampaignChange: (selectedCampaignName) => dispatch(changeCampaign(selectedCampaignName)),
        onScenarioChange: (selectedScenarioName) => dispatch(changeScenario(selectedScenarioName)),
        onDifficultyChange: (selectedDifficulty) => dispatch(changeDifficulty(selectedDifficulty)),
        onTokenAmountChange: (tokenType, amount) => dispatch(changeTokenAmount(tokenType, amount)),
        onPullToken: () => dispatch(onPullToken()),
        onRevealedTokenClick: (revealedTokenId, revealedTokenType) => dispatch(onRevealedTokenClick(revealedTokenId, revealedTokenType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
