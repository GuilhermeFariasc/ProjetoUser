// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-ba0201b9b0d2e9bde1afa3debdbe069404bba679.cpwr4ud8dm7c.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'lIK9bG;5cGn6$]44>mb,m24w##<I^,b8'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}