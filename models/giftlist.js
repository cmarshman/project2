module.exports = function (sequelize, DataTypes) {
  var giftList = sequelize.define("GiftList", {
    gift_name: DataTypes.STRING,
  });
  return giftList;
};
