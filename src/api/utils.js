import { omit } from 'ramda';

export const getEntity = entity =>
  entity.sys.type === 'Asset'
    ? {
        id: entity.sys.id,
        ...omit(['file'], entity.fields),
        ...omit(['details'], entity.fields.file),
        ...(entity.fields.file.details.image || {}),
      }
    : {
        id: entity.sys.id,
        ...entity.fields,
      };

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
