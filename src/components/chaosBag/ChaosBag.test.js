import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ChaosBag from './ChaosBag';
import chaosBagDefaults from '../../chaosBagDefaults';
import constants from '../../constants';

describe('Chaos Bag', () => {
    let renderer;
    const tokens = chaosBagDefaults[constants.SCENARIOS.THE_GATHERING][constants.DIFFICULTIES.STANDARD];
    const onTokenAmountChange = () => {};

	beforeEach(function() {
		renderer = ReactTestUtils.createRenderer();
	});

    it('Should render self.', () => {
        const chaosBag = renderer.render(<ChaosBag
            tokens={tokens}
            onTokenAmountChange={() => onTokenAmountChange()}
        />);
        expect(chaosBag).toBeDefined();
    });
});
