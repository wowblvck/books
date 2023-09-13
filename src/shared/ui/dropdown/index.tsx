import { Select } from '@mantine/core';
import React from 'react';

export type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  defaultValue: string;
  onChange: (value: string) => void;
  options: Option[];
};

export const Dropdown: React.FC<DropdownProps> = ({ defaultValue, onChange, options }) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <Select
      data={options.map((option) => {
        const { label, value } = option;
        return {
          label,
          value,
        };
      })}
      defaultValue={defaultValue}
      onChange={handleChange}
      radius="md"
      size="md"
    />
  );
};
