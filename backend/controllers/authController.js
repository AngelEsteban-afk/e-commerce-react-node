import User from "../models/User.js";

// Registro de usuario
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar el usuario" });
  }
};

// Inicio de sesión
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Credenciales incorrectas" });
    }
    const token = user.generateAuthToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};
