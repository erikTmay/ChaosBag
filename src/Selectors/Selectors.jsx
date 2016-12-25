import React from 'react';
import { connect } from 'react-redux';
import { changeCampaign, changeScenario, changeDifficulty  } from './../actions/actions';
import Constants from './../Constants';
import Selector from './Selector';

class Selectors extends React.Component {
    render() {
        return (
            <div>
                <Selector
                    selectorName={Constants.SELECTOR_NAMES.CAMPAIGN}
                    selectedValue={this.props.selectedCampaignName}
                    handleOnChange={this.props.onCampaignChange.bind(this)}
                    values={this.props.visibleCampaigns}
                />
                <Selector
                    selectorName={Constants.SELECTOR_NAMES.SCENARIO}
                    selectedValue={this.props.selectedScenarioName}
                    handleOnChange={this.props.onScenarioChange.bind(this)}
                    values={this.props.visibleScenarios}
                />
                <Selector
                    selectorName={Constants.SELECTOR_NAMES.DIFFICULTY}
                    selectedValue={this.props.selectedDifficulty}
                    handleOnChange={this.props.onDifficultyChange.bind(this)}
                    values={this.props.visibleDifficulties}
                />
            </div>
        )
    }
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
