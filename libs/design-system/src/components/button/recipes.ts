import { cva } from '@acme/styled-system/css';

export const button = cva({
  base: {
    px: '4',
    py: '8',
    rounded: 'xl',
  },
  variants: {
    variant: {
      primary: {
        bg: 'brand',
        color: 'white',
      },
      secondary: {
        bg: 'gray.500',
        color: 'gray',
      },
    },
  },
});
