import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { BadgeProps } from '.';
import styled from 'styled-components';
import DownloadIcon from '../../icons/Download';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const DangerBadge = Template.bind({});
DangerBadge.args = {
  children: 'Danger',
  type: 'danger',
};

export const InfoBadge = Template.bind({});
InfoBadge.args = {
  children: 'Info',
  type: 'info',
};

export const WarningBadge = Template.bind({});
WarningBadge.args = {
  children: 'Warning',
  type: 'warning',
};

export const SuccessBadge = Template.bind({});
SuccessBadge.args = {
  children: 'Success',
  type: 'success',
};

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
  children: 'Primary',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  type: 'secondary',
};

const BadgeRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <BadgeRow>
        <Badge size='default'>Default</Badge>
      </BadgeRow>
      <BadgeRow>
        <Badge type='danger' size='default'>Default</Badge>
      </BadgeRow>
      <BadgeRow>
        <Badge type='info' size='default'>Default</Badge>
      </BadgeRow>
      <BadgeRow>
        <Badge type='warning' size='default'>Default</Badge>
      </BadgeRow>
      <BadgeRow>
        <Badge type='success' size='default'>Default</Badge>
      </BadgeRow>
      <BadgeRow>
        <Badge type='primary' size='default'>Default</Badge>
      </BadgeRow>
      <BadgeRow>
        <Badge type='secondary' size='default'>Default</Badge>
      </BadgeRow>
    </>
  );
};