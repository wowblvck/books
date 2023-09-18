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
  const sortedOptions = [...options].sort((a, b) => a.label.localeCompare(b.label));

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <Select
      w={{ xs: '100%', sm: 'auto' }}
      data={sortedOptions.map((option) => {
        const { label, value } = option;
        return {
          label,
          value,
        };
      })}
      defaultValue={defaultValue}
      onChange={handleChange}
      allowDeselect={false}
      radius="md"
      size="md"
    />
  );
};
