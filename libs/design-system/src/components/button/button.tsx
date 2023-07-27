import { Slot } from '@radix-ui/react-slot';
import type { RecipeVariantProps } from '@acme/styled-system/css';
import type { ElementRef, ComponentProps } from 'react';
import { forwardRef } from 'react';

import { button } from './recipes';

type ButtonProps = ComponentProps<'button'> &
  RecipeVariantProps<typeof button> & {
    asChild?: boolean;
  };

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ asChild = false, children, type = 'button', variant, ...props }, forwardedRef) => {
    const ButtonTag = asChild ? Slot : 'button';

    return (
      <ButtonTag
        {...props}
        className={button({ variant })}
        ref={forwardedRef}
        type={ButtonTag === 'button' ? type : undefined}
      >
        {children}
      </ButtonTag>
    );
  },
);

Button.displayName = 'Button';
