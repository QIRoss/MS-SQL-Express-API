const  config = {
    user:  'SA',
    password:  'sql_2021!',
    server:  'localhost',
    database:  'testDB',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        instancename:  'lucasQueiroz',
        trustServerCertificate: true
    },
    port:  1433
}

  module.exports = config;