import React from 'react';
import Checkbox from './inputs/Checkbox';
import Input from './inputs/Input';

export const FormContext = React.createContext();

export const FormStorage = ({ children, configFields = [], onSubmit }) => {
  const [form, setForm] = React.useState(
    configFields.reduce((acc, { id, initialValue }) => {
      return { ...acc, [id]: initialValue };
    }, {}),
  );

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit && onSubmit(form);
  }

  return (
    <FormContext.Provider value={{ form, setForm, configFields }}>
      <form onSubmit={handleSubmit}>
        {configFields.map(
          ({ label, id, type, placeholder, validates, options }) => {
            const [category, subtype] = type.split('::');
            if (category === 'checkbox') {
              return (
                <Checkbox key={id} id={id} value={form[id]} options={options} />
              );
            } else {
              return (
                <Input
                  key={id}
                  label={label}
                  id={id}
                  type={subtype}
                  validates={validates}
                  placeholder={placeholder}
                />
              );
            }
          },
        )}
        {children}
      </form>
    </FormContext.Provider>
  );
};
