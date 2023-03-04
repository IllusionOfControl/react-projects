import { faker } from '@faker-js/faker';

const currentYear = new Date().getFullYear()

const data = [...Array(1000)].map((_, index) => ({
  id: index,
  name: faker.name.fullName(),
  age: currentYear - faker.date.birthdate({max: 45, min: 15, mode: "age"}).getFullYear(),
  image_url: faker.internet.avatar(),
}));
  

export default data;