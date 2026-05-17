const wishlist = require("../models/wishlist")

exports.wishlist_add = async (req, res) => {
  let { userId, productId, producttype } = req.body
  const existdata = await wishlist.findOne({ userId, productId })
  if (existdata) {
    return res.json({ msg: "Products Already exists", existdata })
  }
  let data = new wishlist({ userId, productId, producttype })
  await data.save()
  res.json({ msg: "Data Posted in wishlist", data })
}

exports.wishlist_get = async (req, res) => {
  const data = await wishlist.find()
  res.json({ msg: "Wishlist Get Successfully", data })
}

