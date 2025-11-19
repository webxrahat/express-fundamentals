export const getUsers = (req, res) => {
  res.status(200).json({ message: "get all users" });
};

export const createUser = (req, res) => {
  res.status(201).json(req.body);
};

export const getUser = (req, res) => {
  res.status(200).json({ message: `get a user of id no:${req.params.id}` });
};

export const updateUser = (req, res) => {
  res.status(200).json({ message: `get update of id no:${req.params.id}` });
};

export const deleteUser = (req, res) => {
  res.status(200).json(`get delete of id no:${req.params.id}`);
};
