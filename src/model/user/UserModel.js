import UserSchema from "./UserSchema.js";
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
export const getUser = () => {
  return UserSchema.find();
};

export const updateUsers = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, { new: true });
};

export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};

