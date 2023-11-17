// formController.js
//importaciones db

exports.getForm = async (req, res) => {
    
    // sacar informacion de un form ya empezado, o rescatar null
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
  