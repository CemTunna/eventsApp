import React from 'react';
import { Input, InputAdornment } from '@mui/material';
import classNames from 'classnames';
import styles from 'Styles/Input.module.css';
interface EventsInputProps {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  id?: string;
  icon?: any;
}
const EventsInput: React.FC<EventsInputProps> = ({
  placeholder,
  className,
  onChange,
  type,
  value,
  name,
  id,
  icon,
}) => {
  return (
    <Input
      startAdornment={
        icon && <InputAdornment position='start'>{icon}</InputAdornment>
      }
      name={name}
      id={id}
      value={value}
      type={type}
      disableUnderline={true}
      onChange={onChange}
      className={
        !className ? styles.input : classNames(className, styles.input)
      }
      placeholder={placeholder}
    />
  );
};

export default EventsInput;
