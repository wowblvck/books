import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import React from 'react';

export const UpButton = createPolymorphicComponent<'button', ButtonProps>(
  React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => (
    <Button {...props} ref={ref} radius="xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M18 11l-6 -6"></path>
        <path d="M6 11l6 -6"></path>
      </svg>
    </Button>
  ))
);
