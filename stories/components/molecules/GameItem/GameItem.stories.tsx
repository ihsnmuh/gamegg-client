import { Meta } from '@storybook/react';
import GameItem, {
  GameItemProps,
} from '../../../../pages/components/molecules/GameItem';

export default {
  title: 'Component/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Tamplate = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Tamplate.bind({});
Default.args = {
  title: 'Super Mesh',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
