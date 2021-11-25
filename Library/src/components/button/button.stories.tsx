import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';
import styled from 'styled-components';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Large button',
    size: 'large'
}

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  children: 'Primary Default',
  type: 'primaryDefault',
  size: 'large'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Primary Dark',
  type: 'primaryDark',
  size: 'large'
};

export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
  children: 'Primary Ghost',
  type: 'primaryGhost',
  size: 'large'
};

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  children: 'Secondary Default',
  type: 'secondaryDefault',
  size: 'large'
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  children: 'Secondary Light',
  type: 'secondaryLight',
  size: 'large'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  size: 'large'
};

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size='large'>Large</Button>
        <Button size='default'>Default</Button>
        <Button size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='primaryDefault' size='large'>Large</Button>
        <Button type='primaryDefault' size='default'>Default</Button>
        <Button type='primaryDefault' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='primaryDark' size='large'>Large</Button>
        <Button type='primaryDark' size='default'>Default</Button>
        <Button type='primaryDark' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='primaryGhost' size='large'>Large</Button>
        <Button type='primaryGhost' size='default'>Default</Button>
        <Button type='primaryGhost' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='secondaryDefault' size='large'>Large</Button>
        <Button type='secondaryDefault' size='default'>Default</Button>
        <Button type='secondaryDefault' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='secondaryLight' size='large'>Large</Button>
        <Button type='secondaryLight' size='default'>Default</Button>
        <Button type='secondaryLight' size='small'>Small</Button>
      </ButtonRow>
    </>
  );
};