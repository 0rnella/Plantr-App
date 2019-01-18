const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: Sequelize.INTEGER
})

const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN,
})

const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})

modules.export = db;