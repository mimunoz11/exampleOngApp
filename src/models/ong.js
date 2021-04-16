module.exports = (sequelize, DataTypes) => {
  const ong = sequelize.define('ong', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});

  ong.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return ong;
};
