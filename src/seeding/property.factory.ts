import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Property } from '../entities/property.entity';

export const PropertyFactory = setSeederFactory(Property, () => {
  const property = new Property();
  property.name = faker.location.street();
  property.price = Math.round(+faker.commerce.price({min:10000,max:10000000}));
  property.description = faker.lorem.sentence();

  return property;
});