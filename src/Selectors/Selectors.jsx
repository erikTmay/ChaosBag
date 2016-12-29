import React from 'react';
import { connect } from 'react-redux';
import { changeCampaign, changeScenario, changeDifficulty  } from './../actions/actions';
import Constants from './../Constants';
import Selector from './Selector';

const selectableCampaigns = [Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT, Constants.CAMPAIGNS.STAND_ALONE_SCENARIOS];
const NIGHT_OF_THE_ZEALOT_SCENARIOS = [
    Constants.SCENARIOS.THE_GATHERING,
    Constants.SCENARIOS.THE_MIDNIGHT_MASKS,
    Constants.SCENARIOS.THE_DEVOURER_BELOW,
];
const STAND_ALONE_SCENARIOS = [
    Constants.SCENARIOS.CURSE_OF_THE_ROUGAROU,
    Constants.SCENARIOS.CARNEVALE_OF_HORRORS
];
const ALL_DIFFICULTIES = [
    Constants.DIFFICULTIES.EASY,
    Constants.DIFFICULTIES.STANDARD,
    Constants.DIFFICULTIES.HARD,
    Constants.DIFFICULTIES.EXPERT
];
const STANDARD_AND_HARD_DIFFICULTIES = [
    Constants.DIFFICULTIES.STANDARD,
    Constants.DIFFICULTIES.HARD
];

const Selectors = (props) => {
    console.log("in selectors: ", props);

    let selectableScenarios = [];
    let selectableDifficulties = [];
    if(props.selectedCampaignName === Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT) {
        selectableScenarios = NIGHT_OF_THE_ZEALOT_SCENARIOS;
        selectableDifficulties = ALL_DIFFICULTIES;
    } else {
        selectableScenarios = STAND_ALONE_SCENARIOS;
        selectableDifficulties = STANDARD_AND_HARD_DIFFICULTIES;
    }
    return (
        <div>
            <Selector
                selectorName={Constants.SELECTOR_TYPES.CAMPAIGN}
                selectedValue={props.selectedCampaignName}
                handleOnChange={props.onCampaignChange.bind(this)}
                values={selectableCampaigns}
            />
            <Selector
                selectorName={Constants.SELECTOR_TYPES.SCENARIO}
                selectedValue={props.selectedScenarioName}
                handleOnChange={props.onScenarioChange.bind(this)}
                values={selectableScenarios}
            />
            <Selector
                selectorName={Constants.SELECTOR_TYPES.DIFFICULTY}
                selectedValue={props.selectedDifficulty}
                handleOnChange={props.onDifficultyChange.bind(this)}
                values={selectableDifficulties}
            />
        </div>
    );
}

Selectors.propTypes = {
    onCampaignChange: React.PropTypes.func.isRequired,
    onScenarioChange: React.PropTypes.func.isRequired,
    onDifficultyChange: React.PropTypes.func.isRequired,
    selectedCampaignName: React.PropTypes.string.isRequired,
    selectedScenarioName: React.PropTypes.string.isRequired,
    selectedDifficulty: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        selectedCampaignName: state.selectedCampaignName,
        selectedScenarioName: state.selectedScenarioName,
        selectedDifficulty: state.selectedDifficulty
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
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Selectors);
