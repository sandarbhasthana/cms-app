import { registerDecorator, ValidationOptions } from 'class-validator';
import { isValidIMO, isValidMMSI } from '../validators/maritime.validators';

export function IsIMO(options?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsIMO',
      target: object.constructor,
      propertyName,
      options,
      validator: {
        validate(value: any) {
          return isValidIMO(String(value || ''));
        },
        defaultMessage() {
          return 'Invalid IMO number (7 digits with checksum)';
        },
      },
    });
  };
}

export function IsMMSI(options?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsMMSI',
      target: object.constructor,
      propertyName,
      options,
      validator: {
        validate(value: any) {
          return isValidMMSI(String(value || ''));
        },
        defaultMessage() {
          return 'MMSI must be 9 digits';
        },
      },
    });
  };
}
