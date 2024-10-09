// src/api.ts
import axios from 'axios';
import { TEntityType } from '../type.ts';

const api = axios.create({
  baseURL: 'https://genesis-crm.vercel.app/api', // Замените на ваш URL
});

// Метод для создания сущности
export const createEntity = async (entityType: TEntityType | null, name: string) => {
  if (!entityType) {
    throw new Error('Не выбран тип сущности');
  }

  try {
    const response = await api.post('/create', {
      entityType,
      data:[{name}],
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании сущности:', error);
    throw error;
  }
};
