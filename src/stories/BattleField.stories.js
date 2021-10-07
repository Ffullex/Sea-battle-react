import React from 'react';
import { createBattleField } from '../components/matrix';
import BattleField from './BattleField';

export default {
    title: 'Example/BattleField',
    component: BattleField
};

const Template = args => <BattleField {...args} />;

export const PrimaryField = Template.bind({});
PrimaryField.args = {
    matrix: createBattleField(),
    cellField: createBattleField()
};
