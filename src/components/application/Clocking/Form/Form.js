import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import moment from 'moment';

import Summary from './Summary';
import { dangerColor, accentColor } from '../../../../styles/variables';
import {
  calculateWorkedHours,
  calculateBalance,
  dateFormat,
} from '../../../../utils/time';
import useForm from '../../../../hooks/useForm';

const FormControl = styled.div`
  padding: 0 8px;
  margin-top: 16px;

  &:last-child {
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled(InputMask)`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 0.9rem;
  transition: 0.3s;
  background-color: #fafafa;

  &:focus {
    border-color: ${accentColor};
    box-shadow: 0 0 0 2px ${accentColor}44;
  }

  &:read-only {
    background-color: #ddd;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: stretch;
`;

const IconInput = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    background-color: #eee;
  }
`;

const Error = styled.div`
  font-size: 0.9rem;
  color: ${dangerColor};
  margin-top: 8px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  min-width: 80px;
  height: 48px;
  padding: 8px;
  color: white;
  text-align: center;
  font-size: 1.02rem;
  background-color: ${accentColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClockingForm = ({ values = {}, onSubmit, editMode = false }) => {
  const { fields, bindField, validateForm, errors, setFieldValue } = useForm({
    fields: {
      date: values.date || '',
      in: values.in || '',
      lunchStart: values.lunchStart || '',
      lunchEnd: values.lunchEnd || '',
      out: values.out || '',
    },
    validations: {
      date: {
        required: 'Campo obrigatório',
        pattern: {
          value: /\d{2}\/\d{2}\/\d{4}/gi,
          message: 'Informe o dia no padrão dd/mm/aaaa',
        },
        validate: value => {
          const isAlreadyRegistered = days.find(item => item.date === value);

          if (!editMode && isAlreadyRegistered) {
            return 'Data já cadastrada';
          }

          if (!moment(value, dateFormat).isValid()) {
            return 'Data inválida';
          }

          return false;
        },
      },
      in: {
        required: 'Campo obrigatório',
        pattern: {
          value: /\d{2}:\d{2}/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
      lunchStart: {
        required: 'Campo obrigatório',
        pattern: {
          value: /\d{2}:\d{2}/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
      lunchEnd: {
        required: 'Campo obrigatório',
        pattern: {
          value: /\d{2}:\d{2}/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
      out: {
        required: 'Campo obrigatório',
        pattern: {
          value: /\d{2}:\d{2}/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
    },
  });

  // prettier-ignore
  const canCalculateWorkedHours = Boolean(
    fields.in &&
    fields.lunchStart &&
    fields.lunchEnd &&
    fields.out &&
    !errors.in &&
    !errors.lunchStart &&
    !errors.lunchEnd &&
    !errors.out,
  );
  const days = useSelector(state => state.clocking);
  const config = {
    workloadHours: 8,
  };

  let workedHours = '00:00';
  let balance = '00:00';

  if (canCalculateWorkedHours) {
    workedHours = calculateWorkedHours(fields);
    balance = calculateBalance(workedHours, config.workloadHours);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const hasErrors = validateForm();

    if (hasErrors) {
      return;
    }

    onSubmit({
      ...fields,
      workedHours,
      balance,
      config,
    });
  }

  function setDateForToday() {
    setFieldValue('date', moment().format(dateFormat));
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Label>Dia</Label>
        <InputGroup>
          <Input
            name="date"
            type="tel"
            placeholder="dd/mm/aaaa"
            mask="99/99/9999"
            maskPlaceholder={null}
            readOnly={Boolean(values.date)}
            {...bindField('date')}
          />
          {!editMode && (
            <IconInput
              onClick={setDateForToday}
              aria-label="usar data de hoje"
              title="usar data de hoje"
            >
              <i className="material-icons">event</i>
            </IconInput>
          )}
        </InputGroup>
        {errors.date && <Error>{errors.date}</Error>}
      </FormControl>

      <FormControl>
        <Label>Entrada</Label>
        <Input
          name="in"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          maskPlaceholder={null}
          {...bindField('in')}
        />
        {errors.in && <Error>{errors.in}</Error>}
      </FormControl>

      <FormControl>
        <Label>Saída almoço</Label>
        <Input
          name="lunchStart"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          maskPlaceholder={null}
          {...bindField('lunchStart')}
        />
        {errors.lunchStart && <Error>{errors.lunchStart}</Error>}
      </FormControl>

      <FormControl>
        <Label>Volta almoço</Label>
        <Input
          name="lunchEnd"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          maskPlaceholder={null}
          {...bindField('lunchEnd')}
        />
        {errors.lunchEnd && <Error>{errors.lunchEnd}</Error>}
      </FormControl>

      <FormControl>
        <Label>Saída</Label>
        <Input
          name="out"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          maskPlaceholder={null}
          {...bindField('out')}
        />
        {errors.out && <Error>{errors.out}</Error>}
      </FormControl>

      <FormControl>
        <Summary workedHours={workedHours} balance={balance} />
      </FormControl>

      <FormControl>
        <Button type="submit">Salvar</Button>
      </FormControl>
    </form>
  );
};

export default ClockingForm;
