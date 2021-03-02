import React from 'react';
import { FormContext } from './Form';
import * as validates from './validates';

const useInput = (id) => {
  const [errors, setErrors] = React.useState([]);
  const [isPristine, setIsPristine] = React.useState(true);
  const useForm = React.useContext(FormContext);
  const value = useForm.form[id];
  const inputConfig = useForm.configFields.find((input) => input.id === id);

  function validate(value) {
    const localErrors = [];

    inputConfig.validates.forEach((inputValidate) => {
      ['common', 'regexes', 'specific'].forEach((typesValidate) => {
        const localValidate = validates[typesValidate][inputValidate];
        if (!localValidate) return;
        const error = localValidate(value);
        error && localErrors.push(error);
      });
    });

    if (localErrors.length && isPristine) setIsPristine(false);

    setErrors(localErrors);
  }

  function isValid() {
    return !errors.length;
  }

  function onChange({ target }) {
    const { id, value } = target;
    if (errors.length || !isPristine) validate(target.value);
    useForm.setForm({ ...useForm.form, [id]: value });
  }

  return {
    errors,
    onChange,
    isValid,
    isPristine,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useInput;
