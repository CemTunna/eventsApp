import React from 'react';
import { Input } from '@mui/material';
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
}
const EventsInput: React.FC<EventsInputProps> = ({
  placeholder,
  className,
  onChange,
  type,
  value,
  name,
  id,
}) => {
  return (
    <Input
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
