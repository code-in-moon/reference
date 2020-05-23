const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});
// //get single member
// router.get("/:id", (req, res) => {
//   const found = members.some(
//     (members) => members.id === parseInt(req.params.id)
//   );
//   if (found) {
//     res.json(
//       members.filter((members) => members.id === parseInt(req.params.id))
//     );
//   } else {
//     res.status(400).json({ msg: `no member wih the id of ${req.params.id}` });
//   }
// });
