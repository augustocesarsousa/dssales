import { Gender } from '../types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString();
};

export const formatDateToServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };

  return textByGender[gender];
};
