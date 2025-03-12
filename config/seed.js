const { Bar, Biere, Commande } = require("../models/index");
const { faker } = require("@faker-js/faker");
const db = require("./database");

const seedDataBase = async () => {
  try {
    //await db.sync ({force: true})
    let bar = [];
    for (let i = 0; i < 5; i++) {
      bar.push(
        await Bar.create({
          nom: faker.company.name(),
          adresse: faker.location.city(),
          tel: faker.phone.number(),
          email: faker.internet.email(),
          description: faker.lorem.sentence(),
        })
      );
    }
    for (let i = 0; i < 15; i++) {
      await Biere.create({
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        degree: faker.number.float({ min: 3, max: 12, fractionDigits: 1 }),
        prix: faker.number.float({ min: 2, max: 10, fractionDigits: 1 }),
        bar_id: Math.floor(Math.random() * bar.length) + 1,
      });
      console.log(Math.floor(Math.random() * bar.length));
    }

    for (let i = 0; i < 10; i++) {
      await Commande.create({
        prix: faker.number.float({ min: 10, max: 100, fractionDigits: 1 }),
        date: faker.date.recent(),
        status: faker.helpers.arrayElement([
          "Brouillon",
          "En cours",
          "Terminé",
        ]),
        bar_id: Math.floor(Math.random() * bar.length) + 1,
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    await db.close();
  }
};

seedDataBase();
