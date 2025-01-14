const db = require('../dbConnection/db');

exports.createReservation = async (req,res) => {
    const {
        firstName, lastName, email, date, time, phone
    } = req.body;
    console.log(firstName + " " + lastName);
    
  try {
    const query = `
      INSERT INTO reservation_details (first_name, email,id,last_name, phone,reservation_date, reservation_time)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const maxIdQuery = `SELECT MAX(id) AS maxId FROM reservation_details`;

    const [rows] = await db.promise().query(maxIdQuery);
    const maxId = rows[0].maxId;

    let nextId;
    if(!maxId){
        nextId = `1`;
    }
    else{
        const numPart = parseInt(maxId);
        nextId = `${numPart+1}`;
    }


    const values = [firstName, email,nextId, lastName,date, time, phone];
    const [result] = await db.promise().query(query, values);
    res.status(200).json({ message: 'Reservation created successfully ' + nextId });
  } catch (error) {
    console.error('Error creating reservation:', error);
  }
};

exports.getAllReservations = async (req,res) => {
    const query = 'SELECT * FROM reservation_details';
  
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error Reservations ' + err.stack);
            return res.status(500).json({ error: 'Failed to reservation Agreements' });
        }
        res.status(200).json({ Reservations : results });
    });
  };
  
