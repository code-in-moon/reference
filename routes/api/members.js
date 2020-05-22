const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");
const app = express();

//body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//you can write below in index.js
// //get all members
// app.get("/api/members", (req, res) => {
//   res.json(members);
// });

// //get single member
// app.get("/api/members/:id", (req, res) => {
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

// you can write it with router;
//get all members
router.get("/", (req, res) => {
  res.json(members);
});

//get single member
router.get("/:id", (req, res) => {
  const found = members.some(
    (members) => members.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      members.filter((members) => members.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no member wih the id of ${req.params.id}` });
  }
});

//create members
router.post("/", (req, res) => {
  //res.send("kjkkkkkkkkk");
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.email || !newMember.name) {
    res.status(400).json({ msg: "please include name and include" });
  } else {
    members.push(newMember);
    res.send(members);
  }
});

//update single member
router.put("/:id", (req, res) => {
  const found = members.some(
    (members) => members.id === parseInt(req.params.id)
  );
  if (found) {
    const updmember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updmember.name ? updmember.name : member.name;
        member.email = updmember.email ? updmember.email : member.email;
        res.send(members);
        res.json({ msg: "member updated" });
      }
    });
  } else {
    res.status(400).json({ msg: `no member wih the id of ${req.params.id}` });
  }
});

//delete single member
router.delete("/:id", (req, res) => {
  const found = members.some(
    (members) => members.id === parseInt(req.params.id)
  );
  if (found) {
    res.json({
      msg: "member deleted",
      members: members.filter(
        (members) => members.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `no member wih the id of ${req.params.id}` });
  }
});

module.exports = router;
