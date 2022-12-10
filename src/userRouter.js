import express from "express";
import {
  deleteUser,
  getUser,
  insertUser,
  updateUsers,
} from "./model/user/UserModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await getUser();
    res.json({
      status: "success",
      message: "here are the users",
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "user created successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    const { _id, lName, ...rest } = req.body;

    const filter = { _id };

    const result = await updateUsers(filter, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create update, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    // const filter = { _id };

    const result = await deleteUser(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create update, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

export default router;
