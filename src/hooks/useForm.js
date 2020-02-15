import { useState } from 'react';

export default function useForm({ defaultValues = {}, validations = {} }) {
  const [fields, setFields] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  function setFieldValue(name, value) {
    setFields({
      ...fields,
      [name]: value,
    });
  }

  function setFieldError(name, value) {
    setErrors({
      ...errors,
      [name]: value,
    });
  }

  function bindField(name) {
    return {
      value: fields[name],
      onChange: e => {
        setFieldValue(name, e.target.value);
      },
      onBlur: e => {
        const { name, value } = e.target;
        const error = validateField(name, value);

        if (error) {
          setFieldError(name, error);
          return;
        }

        setFieldError(name, null);
      },
    };
  }

  /**
   * Validates a specific field
   * returns an errorMessage if the validation fails
   * returns null when no validation error was found
   * */
  function validateField(name, value) {
    const rules = validations[name];

    if (rules.required) {
      if (!value.trim()) {
        return rules.required;
      }
    }

    if (rules.pattern) {
      if (!rules.pattern.value.test(value)) {
        return rules.pattern.message;
      }
    }

    if (rules.validate) {
      const error = rules.validate(value);

      if (error) {
        return error;
      }
    }

    return null;
  }

  function validateForm() {
    const err = {};

    Object.keys(validations).forEach(name => {
      err[name] = validateField(name, fields[name]);
    });

    const hasErrors = Object.keys(err).length > 0;

    if (hasErrors) {
      setErrors(err);
    }

    return hasErrors;
  }

  return {
    fields,
    errors,
    bindField,
    validateField,
    validateForm,
    setFieldValue,
    setFieldError,
  };
}
