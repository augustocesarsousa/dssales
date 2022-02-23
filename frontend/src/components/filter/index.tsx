import flatpickrlib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import 'flatpickr/dist/themes/dark.css';
import React, { useState } from 'react';
import FlatPicker from 'react-flatpickr';
import { Controller, useForm } from 'react-hook-form';
import { FilterData, Gender } from '../../types';
import './styles.css';

flatpickrlib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gender, setGender] = useState<Gender>();

  const { register, handleSubmit, setValue, getValues, control } = useForm<FilterData>();

  const onSubmit = (formData: FilterData) => {
    onFilterChange(formData);
  };

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 0 || dates.length === 2) {
      setValue('dates', dates);
      const obj: FilterData = {
        dates: getValues('dates'),
        gender: getValues('gender')
      };
      onFilterChange(obj);
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue('gender', event.target.value as Gender);
    const obj: FilterData = {
      dates: getValues('dates'),
      gender: getValues('gender')
    };
    onFilterChange(obj);
  };

  const handleFormClear = () => {
    setValue('dates', []);
    setValue('gender', undefined);
    const obj: FilterData = {
      dates: getValues('dates'),
      gender: getValues('gender')
    };
    onFilterChange(obj);
  };

  return (
    <div className="filter-container base-card">
      <form onSubmit={handleSubmit(onSubmit)}></form>
      <Controller
        name="dates"
        control={control}
        render={({ field }) => (
          <FlatPicker
            {...field}
            options={{
              mode: 'range',
              dateFormat: 'd/m/Y'
            }}
            className="filter-input"
            onChange={onChangeDate}
            placeholder="Selecione um período"
          />
        )}
      />

      <select
        {...register('gender')}
        className="filter-input"
        value={gender}
        onChange={onChangeGender}
      >
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
      <button className="filter-button" onClick={handleFormClear}>
        Limpar filtro
      </button>
    </div>
  );
}

export default Filter;
