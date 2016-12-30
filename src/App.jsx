import React from 'react';
import { connect } from 'react-redux';
import { changeCampaign, changeScenario, changeDifficulty, changeTokenAmount } from './actions/actionCreators';
import './app.css';
import Selectors from './selectors/Selectors';
import ChaosBag from './chaosBag/ChaosBag';

const App = (props) => {
    return (
        <div className="app">
            <div className="app-header">
                <h1>Chaos Bag</h1>
            </div>
            <Selectors {...props} />
            <ChaosBag {...props} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedCampaignName: state.selectedCampaignName,
        selectedScenarioName: state.selectedScenarioName,
        selectedDifficulty: state.selectedDifficulty,
        tokens: state.tokens
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCampaignChange: (selectedCampaignName) => {
            dispatch(changeCampaign(selectedCampaignName))
        },
        onScenarioChange: (selectedScenarioName) => {
            dispatch(changeScenario(selectedScenarioName))
        },
        onDifficultyChange: (selectedDifficulty) => {
            dispatch(changeDifficulty(selectedDifficulty))
        },
        onTokenAmountChange: (tokenType, amount) => {
            dispatch(changeTokenAmount(tokenType, amount))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);