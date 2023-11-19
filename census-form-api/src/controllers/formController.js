// formController.js
const pool = require('../db');

exports.getForm = async (req, res) => {
    
    // sacar informacion de un form ya empezado, o rescatar null
    const { ecn } = req.body;
    
    console.log(ecn);
    try {
    const query = 'SELECT "CensusData" FROM "CensusForm" WHERE "ECN" = $1 AND "state" != $2';
    const result = await pool.query(query, [ecn, 'ND']);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Form not found or it is already completed' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
  };
  
  exports.saveForm = async (req, res) => {
    
    // guardar la informacion que se lleva hasta el momento, aunque no haya completado todo el form
  
    res.send('Form saved successfully');
  };
  
  exports.submitForm = async (req, res) => {
    
    // se hace el envio del form, y el usuario se marca como que 
    // ya completo el censo, no podra abrir mas censos
  
    res.send('Form submitted successfully');
  };
  