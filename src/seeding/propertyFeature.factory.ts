import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const propertyFeature = new PropertyFeature();
  propertyFeature.area = faker.number.int({min:25,max:2500});
  propertyFeature.bathroooms = faker.number.int({min:1,max:3});
  propertyFeature.bedrooms = faker.number.int({min:1,max:3});
  propertyFeature.parkingSpot = faker.number.int({min:1,max:3});
  propertyFeature.hasBalcony = faker.datatype.boolean()
  propertyFeature.hasGardenYard = faker.datatype.boolean()
  propertyFeature.hasSwimmingPool = faker.datatype.boolean()

  return propertyFeature;
});