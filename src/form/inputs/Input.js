import React from 'react';
import useInput from '../useInput';

const Input = ({ placeholder, id, value, label, type, validates }, ref) => {
  const { onChange, errors, onBlur } = useInput(id, validates);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        ref={ref}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />

      {!!errors?.length && <p>{errors[0]}</p>}
    </>
  );
};

export default React.forwardRef(Input);
