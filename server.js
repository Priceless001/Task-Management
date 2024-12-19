const  sequelize  = require('./config/database');
const app = require('./index');
require('dotenv').config();

app.get("/", (req, res) =>{
  return res.status(200).json({Message : "Precious' head is big!"});
})

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});