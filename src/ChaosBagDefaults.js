import constants from './constants';
import _ from 'lodash';

const CHAOS_BAG_DEFAULTS = {};

CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING] = {};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.EASY] = {
    plusOne: 2,
    zero: 3,
    minusOne: 3,
    minusTwo: 2,
    minusThree: 0,
    minusFour: 0,
    minusFive: 0,
    minusSix: 0,
    minusSeven: 0,
    minusEight: 0,
    skull: 2,
    cultist: 1,
    tablet: 1,
    elderThing: 0,
    tenticles: 1,
    elderSign: 1
};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.STANDARD] = {
    plusOne: 1,
    zero: 2,
    minusOne: 3,
    minusTwo: 2,
    minusThree: 1,
    minusFour: 1,
    minusFive: 0,
    minusSix: 0,
    minusSeven: 0,
    minusEight: 0,
    skull: 2,
    cultist: 1,
    tablet: 1,
    elderThing: 0,
    tenticles: 1,
    elderSign: 1
};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.HARD] = {
    plusOne: 0,
    zero: 3,
    minusOne: 2,
    minusTwo: 2,
    minusThree: 2,
    minusFour: 1,
    minusFive: 1,
    minusSix: 0,
    minusSeven: 0,
    minusEight: 0,
    skull: 2,
    cultist: 1,
    tablet: 1,
    elderThing: 0,
    tenticles: 1,
    elderSign: 1
};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.EXPERT] = {
    plusOne: 0,
    zero: 1,
    minusOne: 2,
    minusTwo: 2,
    minusThree: 2,
    minusFour: 2,
    minusFive: 1,
    minusSix: 1,
    minusSeven: 0,
    minusEight: 1,
    skull: 2,
    cultist: 1,
    tablet: 1,
    elderThing: 0,
    tenticles: 1,
    elderSign: 1
};

CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_MIDNIGHT_MASKS] = _.cloneDeep(CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING]);

CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_DEVOURER_BELOW] = _.cloneDeep(CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_GATHERING]);
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_DEVOURER_BELOW][constants.DIFFICULTIES.EASY].elderThing = 1;
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_DEVOURER_BELOW][constants.DIFFICULTIES.STANDARD].elderThing = 1;
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_DEVOURER_BELOW][constants.DIFFICULTIES.HARD].elderThing = 1;
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.THE_DEVOURER_BELOW][constants.DIFFICULTIES.EXPERT].elderThing = 1;

CHAOS_BAG_DEFAULTS[constants.SCENARIOS.CURSE_OF_THE_ROUGAROU] = {};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.CURSE_OF_THE_ROUGAROU][constants.DIFFICULTIES.STANDARD] = {
    plusOne: 2,
    zero: 3,
    minusOne: 3,
    minusTwo: 2,
    minusThree: 2,
    minusFour: 2,
    minusFive: 1,
    minusSix: 1,
    minusSeven: 0,
    minusEight: 0,
    skull: 2,
    cultist: 2,
    tablet: 1,
    elderThing: 1,
    tenticles: 1,
    elderSign: 1
};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.CURSE_OF_THE_ROUGAROU][constants.DIFFICULTIES.HARD] = {
    plusOne: 1,
    zero: 3,
    minusOne: 3,
    minusTwo: 2,
    minusThree: 2,
    minusFour: 2,
    minusFive: 2,
    minusSix: 1,
    minusSeven: 0,
    minusEight: 1,
    skull: 3,
    cultist: 2,
    tablet: 1,
    elderThing: 1,
    tenticles: 1,
    elderSign: 1
};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.CARNEVALE_OF_HORRORS] = {};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.CARNEVALE_OF_HORRORS][constants.DIFFICULTIES.STANDARD] = {
    plusOne: 1,
    zero: 3,
    minusOne: 3,
    minusTwo: 1,
    minusThree: 1,
    minusFour: 1,
    minusFive: 0,
    minusSix: 1,
    minusSeven: 0,
    minusEight: 0,
    skull: 3,
    cultist: 1,
    tablet: 1,
    elderThing: 1,
    tenticles: 1,
    elderSign: 1
};
CHAOS_BAG_DEFAULTS[constants.SCENARIOS.CARNEVALE_OF_HORRORS][constants.DIFFICULTIES.HARD] = {
    plusOne: 1,
    zero: 3,
    minusOne: 2,
    minusTwo: 0,
    minusThree: 1,
    minusFour: 1,
    minusFive: 1,
    minusSix: 1,
    minusSeven: 1,
    minusEight: 0,
    skull: 3,
    cultist: 1,
    tablet: 1,
    elderThing: 1,
    tenticles: 1,
    elderSign: 1
};

export default CHAOS_BAG_DEFAULTS;
