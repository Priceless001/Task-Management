const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("passed hash")
    const user = await User.create({ username, email, password: hashedPassword });

    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.status(201).json({ message: 'User created successfully', user:userWithoutPassword });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};