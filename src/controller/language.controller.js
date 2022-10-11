import{getConnection} from "./../database/database"

const getLanguages = async(req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, programadores FROM lenguaje ");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getLanguage = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
    
        const result = await connection.query("SELECT id, nombre, programadores FROM lenguaje WHERE id = ? ", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const setLanguage = async(req, res) =>{
    try{
        const {id, nombre,programadores}=req.body;
        const lenguaje = {id,nombre,programadores};
        if(nombre=== undefined || programadores === undefined){
            res.status(400).json({message: "error en la adicion"});
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO lenguaje set ?", lenguaje);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage = async(req, res) =>{
    try{
        const {id} = (req.params);
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM lenguaje WHERE id = ? ", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateLanguage = async(req, res) =>{
    try{
        const {nombre,programadores}=(req.body);
        const {id} = (req.params);
        if(nombre=== undefined || programadores === undefined){
            res.status(400).json({message: "error en la adicion"});
        }
        const connection = await getConnection();
        const result = await connection.query("update lenguaje set programadores = '"+programadores+"', nombre = '"+nombre+"' where id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getLanguages,
    setLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
};