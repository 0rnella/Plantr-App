const db = require("./models")

db.sync({force: true})
    .then(() => {
        db.close()
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        db.close()
    })

    