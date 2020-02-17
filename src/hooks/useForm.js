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

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    setFieldValue(name, value);
  }

  function handleBlur(e) {
    const { name, value } = e.currentTarget;
    const error = validateField(name, value);

    if (error) {
      setFieldError(name, error);
      return;
    }

    setFieldError(name, '');
  }

  function bindField(name) {
    return {
      value: fields[name],
      onChange: handleChange,
      onBlur: handleBlur,
    };
  }

  /**
   * Validates a specific field
   * returns an errorMessage if the validation fails
   * returns null when no validation error was found
   * */
  function validateField(name, value = '') {
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

    return '';
  }

  function validateForm() {
    const err = {};

    Object.keys(validations).forEach(name => {
      const error = validateField(name, fields[name]);

      if (error) {
        err[name] = error;
      }
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
