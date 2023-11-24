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
    const { ecn } = req.body; 
    const { censusData } = req.body; 
  
    if (!censusData) {
      return res.status(400).json({ message: 'No census data provided' });
    }
  
    try {
      const updateQuery = `
        UPDATE "CensusForm"
        SET "CensusData" = $1, "state" = 'R'
        WHERE "ECN" = $2;`;
      
      const result = await pool.query(updateQuery, [censusData, ecn]);

      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Form with the provided ECN not found' });
      }
  
      
  
      res.status(200).json({ message: 'Form updated successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  };
  
  exports.submitForm = async (req, res) => {
    const { ecn } = req.body;
    try {
      const updateQuery = `
        UPDATE "CensusForm"
        SET "state" = 'R'
        WHERE "ECN" = $1`;
      
      const result = await pool.query(updateQuery, [ecn]);
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Form with the provided ECN not found or is already completed' });
      }
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  };

  exports.startForm = async (req, res) => {
    const { ecn } = req.body;

    try {
      const updateQuery = `
        UPDATE "CensusForm"
        SET "state" = 'P'
        WHERE "ECN" = $1`;
      
      const result = await pool.query(updateQuery, [ecn]);
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Form with the provided ECN not found or is already completed' });
      }
  
      res.status(200).json({ message: 'Form started successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  };
  