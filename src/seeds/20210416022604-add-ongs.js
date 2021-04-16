module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const ongsArray = [];
    ongsArray.push({
      name: 'Fundación Desarrollo y Progreso',
      email: 'fundaciondyp@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    ongsArray.push({
      name: 'Observatorio Ciudadano',
      email: 'observatorio@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    ongsArray.push({
      name: 'Desarrollo Rural',
      email: 'desarrollorural@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('ongs', ongsArray);
  },

  down: () => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
