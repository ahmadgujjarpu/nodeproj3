const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const user = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    re_enter_password:{
        type: Sequelize.STRING
    }
});

const project = sequelize.define('project', {
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey :true
    },
    title: {
        type: Sequelize.STRING
    },
    owner: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

const task = sequelize.define('task', {
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey :true
    },
    status: {
        type: Sequelize.STRING
    },
    member: {
        type: Sequelize.STRING
    },
    taskdescription: {
        type: Sequelize.STRING
    }
});

const user_project = sequelize.define('user_project', {
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey :true
    },
    projectId: {
        type: Sequelize.INTEGER,
        references:{
            model:project,
            key:"id"
        }
    },
    userId: {
        type: Sequelize.INTEGER,
        references:{
            model:user,
            key:"id"
        }
    }
});
const profile = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    
    profilePic: {
        type: Sequelize.STRING
    }
});

module.exports = {user,
project,
task,
user_project,
profile
};
