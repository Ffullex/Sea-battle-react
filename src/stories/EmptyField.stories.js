import React from 'react';
import { createBattleField } from '../components/matrix';
import EmptyField from "./EmptyField";

export default {
    title: 'Example/EmptyField',
    component: EmptyField
};

const Template = args => <EmptyField {...args} />;

export const PrimaryField = Template.bind({});
PrimaryField.args = {
    matrix: createBattleField()
};