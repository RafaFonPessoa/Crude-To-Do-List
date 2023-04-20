const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'To_do_List',
});

connection.connect((err) => {
    if(err) {
        console.error('Erro ao conectar' + err.stack);
        return;
    }
    console.log('Conecção bem sucedida!');
});
