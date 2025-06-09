import type { Preview } from '@storybook/react-vite';
import React from 'react';
import '../src/index.css';
import { Toast } from '../src/components'; // Adjust path based on where Toast is located

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (StoryFn) => (
      <Toast>
        <StoryFn />
      </Toast>
    ),
  ],
};

export default preview;
