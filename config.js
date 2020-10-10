
module.exports = {
    mode: process.env.NODE_ENV || "development",
    port: process.env.PORT || 9119,
    dbUrl: process.env.DATABASE_URL || "mongodb://host/dbname?option=value"
}