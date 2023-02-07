const getCategories = (items) => {
  const uniqueCategories = [];
  items.map((item) => {
    if (uniqueCategories.indexOf(item.category) === -1) {
      uniqueCategories.push(item.category);
    }
  });
  return uniqueCategories;
};

const getUniqueItems = (items) => {
  const uniqueItems = [];
  items.map((item) => {
    if (uniqueItems.indexOf(item) === -1) {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
};

module.exports = { getCategories, getUniqueItems };
