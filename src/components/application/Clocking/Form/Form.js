import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import {
  calculateWorkedHours,
  calculateBalance,
  dateFormat,
} from '../../../../utils/time';
import useForm from '../../../../hooks/useForm';

import Alert from '../../../ui/Alert';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import Spinner from '../../../ui/Spinner';
import IconButton from '../../../ui/IconButton';

import Summary from './Summary';

const FormControl = styled.div`
  padding: 0 8px;
  margin-top: 16px;

  &:last-child {
    margin-bottom: 16px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ClockingForm = ({ values = {}, onSubmit, editMode = false, error, loading }) => {
  const { fields, bindField, validateForm, errors, setFieldValue } = useForm({
    defaultValues: {
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
          const isAlreadyRegistered = clocking.find(item => item.date === value);

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
          value: /^\d{2}:\d{2}$/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
      lunchStart: {
        required: 'Campo obrigatório',
        pattern: {
          value: /^\d{2}:\d{2}$/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
      lunchEnd: {
        required: 'Campo obrigatório',
        pattern: {
          value: /^\d{2}:\d{2}$/gi,
          message: 'Digite no padrão hh:mm',
        },
      },
      out: {
        required: 'Campo obrigatório',
        pattern: {
          value: /^\d{2}:\d{2}$/gi,
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
    !errors.out
  );
  const { clocking, config } = useSelector(state => ({
    clocking: state.clocking.data,
    config: state.auth.user.config,
  }));

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
      date: moment(fields.date, dateFormat)
        .toDate()
        .getTime(),
      in: fields.in,
      lunchStart: fields.lunchStart,
      lunchEnd: fields.lunchEnd,
      out: fields.out,
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
        <InputGroup>
          <div style={{ flex: 1 }}>
            <Input
              label="Dia"
              name="date"
              type="tel"
              placeholder="dd/mm/aaaa"
              mask="99/99/9999"
              readOnly={editMode}
              error={errors.date}
              {...bindField('date')}
            />
          </div>
          {!editMode && (
            <IconButton
              type="button"
              icon="event"
              onClick={setDateForToday}
              aria-label="usar data de hoje"
              title="usar data de hoje"
            />
          )}
        </InputGroup>
      </FormControl>

      <FormControl>
        <Input
          label="Entrada"
          name="in"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          error={errors.in}
          {...bindField('in')}
        />
      </FormControl>

      <FormControl>
        <Input
          label="Saída almoço"
          name="lunchStart"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          error={errors.lunchStart}
          {...bindField('lunchStart')}
        />
      </FormControl>

      <FormControl>
        <Input
          label="Volta almoço"
          name="lunchEnd"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          error={errors.lunchEnd}
          {...bindField('lunchEnd')}
        />
      </FormControl>

      <FormControl>
        <Input
          label="Saída"
          name="out"
          type="tel"
          placeholder="00:00"
          mask="99:99"
          error={errors.out}
          {...bindField('out')}
        />
      </FormControl>

      <FormControl>
        <Summary workedHours={workedHours} balance={balance} />
      </FormControl>

      <FormControl>
        <Button type="submit" disabled={loading}>
          {loading ? <Spinner /> : 'Salvar'}
        </Button>
      </FormControl>

      {error && <Alert color="danger">Erro ao criar marcação. Tente novamente.</Alert>}
    </form>
  );
};

export default ClockingForm;
