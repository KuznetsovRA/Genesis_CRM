import { Entity } from './const.ts';

export type TEntityType = typeof Entity[number]['value'];

export type TStoreEntity = Record<Exclude<TEntityType, null> , Array<{ id: string, name: string }>>;

