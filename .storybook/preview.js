import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';

//Attempt to inject theme styles into stories
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
