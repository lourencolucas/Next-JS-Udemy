export default function handler(req, res) {
    //referenciando na URL o id especifico
    const id = +req.query.id
    res.status(200).json({ 
        id,
        nome: `João Almeida ${id}`,
        email: `exemplo${id}@exemplo.com`
    })}