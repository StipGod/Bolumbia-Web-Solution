const pool = require('../db');

exports.login = async (req, res) => {
  try {
    const { ecn, cfn } = req.body;
    
    const ecnCheck = 'SELECT "CensusData" FROM "CensusForm" WHERE "ECN" = $1 AND "state" != $2'; 
    const check = await pool.query(ecnCheck, [ecn, 'R']);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ECN not found or form already completed' });
    }

    const query = `
    SELECT cf.*
    FROM "CensusForm" cf
    INNER JOIN "PrivateDwelling" pd ON cf."ECN" = pd."CensusCollector_CWL"
    INNER JOIN "CensusRespondent" cr ON pd."PD_id" = cr."PrivateDwelling_PD_id"
    WHERE cf."ECN" = $1 AND pd."CFN" = $2;
      `;
    const values = [ecn, cfn];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Census Form not found with provided ECN and CFN.' });
    }

    // devuelve todo el censusform
    res.status(200).json({ message: 'Authenticated successfully.'});
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};