const app = require('./app');
const config = require('./config/config');
const db = require('./config/db');
const User= require('./models/user.model')

//Test if the db connection is OK

User.user.hasOne(User.task);
User.task.belongsTo(User.user)
User.project.hasOne(User.task);
User.task.belongsTo(User.project);
User.user.hasOne(User.user_project);
User.user_project.belongsTo(User.user);
User.project.hasOne(User.user_project);
User.user_project.belongsTo(User.project);
// User.user.hasMany(User.project({through:User.user_project}));
// User.project.belongsToMany(User.user({through:User.user_project}));
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//Server listening on port 3000
app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}`));