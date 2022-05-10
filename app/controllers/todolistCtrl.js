const connection = require('../dbconfig')

const todolistCtrl = {
    
    getTodolists : async (req,res) =>{
        connection.query('SELECT * FROM todolist', (error,rows) => {
            if(error) throw error;
            console.log(rows)
            res.send(rows);
        })
    },
    insertTodolist : async (req,res) => {
        //자바스크립트 구조분해할당
        const {id,name,password,password2} = req.body;
        const sql = `INSERT INTO todolist(id,name,password,password2)
        VALUES(${id},'${name}',${password},${password2};`

        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }

        )
    }
}

module.exports = todolistCtrladad