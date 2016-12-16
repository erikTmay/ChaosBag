import React from 'react';
import Constants from './../Constants';
import Selector from './Selector';


export default class SelectorComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCampaignName: Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT,
            selectedScenarioName: Constants.SCENARIOS.THE_GATHERING,
            selectedDifficulty: Constants.DIFFICULTIES.STANDARD,
        };
        this.campaignScenarioMap = {};
        this.campaignScenarioMap[Constants.CAMPAIGNS.NIGHT_OF_THE_ZEALOT] = [
            Constants.SCENARIOS.THE_GATHERING,
            Constants.SCENARIOS.THE_MIDNIGHT_MASKS,
            Constants.SCENARIOS.THE_DEVOURER_BELOW,
        ];
        this.campaignScenarioMap[Constants.CAMPAIGNS.STAND_ALONE_SCENARIOS] = [
            Constants.SCENARIOS.CURSE_OF_THE_ROUGAROU,
            Constants.SCENARIOS.CARNEVALE_OF_HORRORS
        ]
        const coreDifficulties = [
            Constants.DIFFICULTIES.EASY,
            Constants.DIFFICULTIES.STANDARD,
            Constants.DIFFICULTIES.HARD,
            Constants.DIFFICULTIES.EXPERT
        ]
        const standAloneDifficulties = [
            Constants.DIFFICULTIES.STANDARD,
            Constants.DIFFICULTIES.HARD
        ]
        this.scenarioDifficultyMap = {};
        this.scenarioDifficultyMap[Constants.SCENARIOS.THE_GATHERING] = coreDifficulties;
        this.scenarioDifficultyMap[Constants.SCENARIOS.THE_MIDNIGHT_MASKS] = coreDifficulties;
        this.scenarioDifficultyMap[Constants.SCENARIOS.THE_DEVOURER_BELOW] = coreDifficulties;
        this.scenarioDifficultyMap[Constants.SCENARIOS.CURSE_OF_THE_ROUGAROU] = standAloneDifficulties;
        this.scenarioDifficultyMap[Constants.SCENARIOS.CARNEVALE_OF_HORRORS] = standAloneDifficulties;
    }

    getCampaignNames() {
        return Object.getOwnPropertyNames(this.campaignScenarioMap);
    }

    getScenarioNames(campaignName) {
        return this.campaignScenarioMap[campaignName];
    }

    getDifficulties(scenarioName) {
        return this.scenarioDifficultyMap[scenarioName];
    }

    handleCampaignChange(campaignName) {
        this.setState({
            selectedCampaignName: campaignName,
            selectedDifficulty: Constants.DIFFICULTIES.STANDARD
        });
    }

    handleScenarioChange(scenarioName) {
        this.setState({
            selectedScenarioName: scenarioName
        });
    }

    handleDifficultyChange(difficulty) {
        this.setState({
            selectedDifficulty: difficulty
        });
    }

    render() {
        return (
            <div>
                <Selector
                    selectorName={Constants.SELECTOR_NAMES.CAMPAIGN}
                    selectedValue={this.state.selectedCampaignName}
                    handleOnChange={this.handleCampaignChange.bind(this)}
                    values={this.getCampaignNames()}
                />
                <Selector
                    selectorName={Constants.SELECTOR_NAMES.SCENARIO}
                    selectedValue={this.state.selectedScenarioName}
                    handleOnChange={this.handleScenarioChange.bind(this)}
                    values={this.getScenarioNames(this.state.selectedCampaignName)}
                />
                <Selector
                    selectorName={Constants.SELECTOR_NAMES.DIFFICULTY}
                    selectedValue={this.state.selectedDifficulty}
                    handleOnChange={this.handleDifficultyChange.bind(this)}
                    values={this.getDifficulties(this.state.selectedScenarioName)}
                />
            </div>
        )
    }
}