import React from 'react';
import { FormContext } from '../Form';

const Checkbox = ({ id, options, value }) => {
  const useForm = React.useContext(FormContext);

  function handleChange({ target }) {
    if (target.checked) {
      useForm.setForm({ ...useForm.form, [id]: [...value, target.value] });
    } else {
      const newValue = value.filter((cor) => cor !== target.value);
      useForm.setForm({ ...useForm.form, [id]: newValue });
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
