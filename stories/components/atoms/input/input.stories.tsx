import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../pages/components/atoms/input';

export default {
  title: 'Component/Atoms/Input',
  component: Input,
} as Meta;

const Tamplate = (args: InputProps) => <Input {...args} />;

export const Default = Tamplate.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
