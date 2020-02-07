import { useState } from "react";

export default function useForm(config) {
  const [fields, setFields] = useState(config.fields);
  const [errors, setErrors] = useState({});
  const validations = config.validations;

  function setFieldValue(name, value) {
    setFields({
      ...fields,
      [name]: value
    });
  }

  function bindField(name) {
    return {
      value: fields[name],
      onChange: e => {
        setFieldValue(name, e.target.value);
      },
      onBlur: validateForm
    };
  }

  function validateForm(e) {
    const err = {};
    let name = "";

    if (e && e.target && e.target.name) {
      name = e.target.name;
    }

    for (let key in validations) {
      const rules = validations[key];
      const field = fields[key];

      if (name && name !== key) {
        continue;
      }

      if (rules.required) {
        if (!field.trim()) {
          err[key] = rules.required;
          continue;
        }
      }

      if (rules.pattern) {
        if (!rules.pattern.value.test(field)) {
          err[key] = rules.pattern.message;
          continue;
        }
      }

      if (rules.validate) {
        const error = rules.validate(field);

        if (error) {
          err[key] = error;
          continue;
        }
      }
    }

    if (name) {
      setErrors({
        ...errors,
        [name]: err[name]
      });
    } else {
      setErrors(err);
    }

    return Object.keys(err).length > 0;
  }

  return {
    fields,
    bindField,
    errors,
    validateForm,
    setFieldValue
  };
}
