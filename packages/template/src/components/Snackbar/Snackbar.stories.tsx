import { storiesOf } from '@storybook/react';
import React from 'react';
import { theme } from 'the-theme';
import Button from '../Button';
import Snackbar from './index';

storiesOf('Snackbar', module)
  .add('single-line message', () => <Snackbar text="Single-line message." />)
  .add('single-line message (leading)', () => (
    <Snackbar leading text="Single-line message." />
  ))
  .add('single-line message with action', () => (
    <Snackbar
      pr={1}
      py="6px"
      text="Single-line message with action."
      actions={<Button color={theme.colors.primary.light} text="Action" />}
    />
  ))
  .add('single-line message with action (leading)', () => (
    <Snackbar
      leading
      pr={1}
      py="6px"
      text="Single-line message with action."
      actions={<Button color={theme.colors.primary.light} text="Action" />}
    />
  ));
