const THE_GATHERING = {
    EASY: {
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
    },
    STANDARD: {
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
    },
    HARD: {
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
    },
    EXPERT: {
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
    }
};
const THE_MIDNIGHT_MASKS = Object.assign({}, THE_GATHERING);
const THE_DEVOURER_BELOW = Object.assign({}, THE_GATHERING);
THE_DEVOURER_BELOW.EASY.tenticles = 1;
THE_DEVOURER_BELOW.STANDARD.tenticles = 1;
THE_DEVOURER_BELOW.HARD.tenticles = 1;
THE_DEVOURER_BELOW.EXPERT.tenticles = 1;

const CURSE_OF_THE_ROUGAROU = {
    STANDARD: {
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
    },
    HARD: {
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
    }
}

const CARNEVALE_OF_HORRORS = {
    STANDARD: {
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
    },
    HARD: {
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
    }
}

export default {
    THE_GATHERING,
    THE_MIDNIGHT_MASKS,
    THE_DEVOURER_BELOW,
    CURSE_OF_THE_ROUGAROU,
    CARNEVALE_OF_HORRORS
}
