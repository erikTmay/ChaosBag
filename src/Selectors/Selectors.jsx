import React from 'react';
import { connect } from 'react-redux';
import { changeCampaign, changeScenario, changeDifficulty  } from './../actions/actions';
import Constants from './../Constants';
import Selector from './Selector';

const Selectors = (props) => {
    return (
        <div>
            <Selector
                selectorName={Constants.SELECTOR_TYPES.CAMPAIGN}
                selectedValue={props.selectedCampaignName}
                handleOnChange={props.onCampaignChange.bind(this)}
                values={props.visibleCampaigns}
            />
            <Selector
                selectorName={Constants.SELECTOR_TYPES.SCENARIO}
                selectedValue={props.selectedScenarioName}
                handleOnChange={props.onScenarioChange.bind(this)}
                values={props.visibleScenarios}
            />
            <Selector
                selectorName={Constants.SELECTOR_TYPES.DIFFICULTY}
                selectedValue={props.selectedDifficulty}
                handleOnChange={props.onDifficultyChange.bind(this)}
                values={props.visibleDifficulties}
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
    selectedDifficulty: React.PropTypes.string.isRequired,
    visibleCampaigns: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    visibleScenarios: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    visibleDifficulties: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
    return {
        selectedCampaignName: state.selectedCampaignName,
        selectedScenarioName: state.selectedScenarioName,
        selectedDifficulty: state.selectedDifficulty,
        visibleCampaigns: state.visibleCampaigns,
        visibleScenarios: state.visibleScenarios,
        visibleDifficulties: state.visibleDifficulties
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
