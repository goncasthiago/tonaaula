const notFound = (req,res) => {
    res.status(404).json({success:false, data: [], msg:"Rota não existe"})
}

module.exports = notFound