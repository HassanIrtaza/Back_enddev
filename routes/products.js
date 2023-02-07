const express = require("express");
const router = express.Router();
const Products = require("../models/product");
const { getCategories, getUniqueItems } = require("../utils/utils");

router.get(`/`, async (req, res) => {
  const { startDate = "", endDate = "" } = req.query || {};
  // const product = await Products.find({
  //   date: { $gt: new Date(startDate), $lt: new Date(endDate) },
  // });
  const product = await Products.find();
  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
});

router.get(`/items-with-categories`, async (req, res) => {
  const product = await Products.find();
  if (!product) {
    res.status(500).json({ success: false });
  }
  let groupByItems = {};
  const categories = getCategories(product);
  for (const category in categories) {
    const categorizedItem = await Products.find({
      category: categories[category],
    });
    const itemsName = categorizedItem.map((item) => item.name);
    groupByItems[categories[category]] = getUniqueItems(itemsName);
  }
  res.send(groupByItems);
});

router.get(`/categories`, async (req, res) => {
  const product = await Products.find();
  if (!product) {
    res.status(500).json({ success: false });
  }
  const categories = getCategories(product);
  res.send(categories);
});

router.get(`/categorized-items`, async (req, res) => {
  const { category = "" } = req.query || {};
  if (!category) {
    res.send({ "categorized_items": [] });
  }
  const product = await Products.find();
  if (!product) {
    res.send({ "categorized_items": [] });
  }
  const categorizedItem = await Products.find({
    category: category,
  });
  res.send({
    "categorized_items": getUniqueItems(
      categorizedItem.map((item) => item.name)
    ),
  });
});
router.post(`/`, (req, res) => {
  const { name, description, price, category } = req.body;
  const newProduct = new Products({
    name,
    description,
    price,
    category,
  });
  newProduct
    .save()
    .then((newItem) => {
      res.status(200).json(newItem);
    })
    .catch((err) => {
      res.status(500).json({ error: err, success: false });
    });
});

router.post(`/bulk-upload`, (req, res) => {
  const { items = [] } = req.body;
  Products.insertMany(items)
    .then((newItem) => {
      res.status(200).json(newItem);
    })
    .catch((err) => {
      res.status(500).json({ error: err, success: false });
    });
});

module.exports = router;
