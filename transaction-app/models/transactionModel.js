const db = require('../config/db.config');

const TransactionData ={
    create: (data,callback)=>{
        let credit ='';
        let debit = ''
        if(data.type=='Credit'){
             credit =data.amount;
        }else if(data.type=='Debit'){
            debit =data.amount;
        }

        const sqlSelect = 'SELECT amount FROM transactions ORDER BY id DESC LIMIT 1';
        db.query(sqlSelect, (err, result) => {
            if (err) return callback(err);

            let currentAmount = result.length ? result[0].amount : 0;

            let newAmount;
            if (data.type === 'Credit') {
                newAmount = Number(currentAmount) + Number(data.amount);
            } else if (data.type === 'Debit') {
                newAmount = currentAmount - data.amount;
            }
       

        const sql = 'Insert into transactions (amount, credit, debit, description) Values(?,?,?,?)';
        db.query(sql,[newAmount, credit,debit,data.description,], callback);  

     });
    },

    getAllTransaction: (callback)=>{
        const sql = 'Select id, amount, debit,credit, description, date from transactions order by date desc ';
        db.query(sql, callback);  
    }

}

module.exports = TransactionData;