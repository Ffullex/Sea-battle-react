import { Cell } from './Cell';
import React from 'react';

export default {
    title: 'Example/Cell',
    component: Cell
};

const Template = args => <Cell {...args} />;

export const Field_Cell = Template.bind({});
Field_Cell.args = {
    status: 0
};
