const Item = require("../models/Items");

exports.createItem = async (req, res) => {
  try {
    const item = new Item({
      ...req.body,
      userId: req.user.id,
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};
exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};
exports.updateItem = async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
exports.deleteItem = async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  await item.deleteOne();
  res.json({ message: "Item deleted" });
};
