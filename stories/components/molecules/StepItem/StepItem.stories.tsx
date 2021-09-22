import { Meta } from '@storybook/react';

import StepItem, {
  StepItemProps,
} from '../../../../pages/components/molecules/StepItem';

export default {
  title: 'Component/Molecules/StepItem',
  component: StepItem,
} as Meta;

const Tamplate = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Tamplate.bind({});
Default.args = {
  icon: 'step1',
  title: '',
  desc1: '',
  desc2: '',
};
