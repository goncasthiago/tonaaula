let {people} = require('../data')
let id = 5

const getPeople = (req,res)=>{
    res.status(200).json({ success:true, data: people})
}

const createPerson = (req,res)=>{
    //console.log(req.body)
    const {name} = req.body
     //don't need the next two lines, just to add the name on people array
     id += 1
     people = [...people, { id, name}]
    
     if(!name){
        return res.status(400).json({success: false, data: [], msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name})
}

const createPersonPostman = (req,res)=> {
    const { name } = req.body
    id += 1
     people = [...people, { id, name}]
    if(!name){
        res.status(400).json({success:false,data: [], msg:"please provide name value"})
    }
    res.status(201).json({success:true, data:[people], msg: ""})
}

const updatePerson = (req,res)=> {
    const {id} = req.params;
    const {name} = req.body;
    let changed = false

    if (!name){
        return res.status(400).json({success: false, data: [], msg: 'Please provide name value'})
    }
    people = people.map( (one)=> {
        if (one.id === Number(id)){
            one.name = name
            changed = true
        }
        return one

    })
    if(!changed){
        return res.status(404).json({success: false, data: [], msg: `Id ${id} não encontrado`})
    }

    res.status(200).json({success: true, data:people, msg:""})

}
const regSim = (req,res)=> {
    const {id, simulado} = req.params;
    let changed = false

    if (!simulado){
        return res.status(400).json({success: false, data: [], msg: 'Favor providenciar o id do Simulado'})
    }
    people = people.map( (one)=> {
        if (one.id === Number(id)){
            one.simulado = one.simulado? [simulado]: one.simulado.push(simulado)
            changed = true
        }
        return one

    })
    if(!changed){
        return res.status(404).json({success: false, data: [], msg: `Id ${id} não encontrado`})
    }

    res.status(200).json({success: true, data:people, msg:""})

}

const deletePerson = (req,res)=>{
    const {id} = req.params
    const person = people.find((one)=> one.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, data: [], msg: `Id ${id} not found`})
    }

    let newPeople = people.filter( (one)=>!(one.id === Number(id)))
    res.status(200).json({success:true, data: newPeople, msg:""})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
    regSim
}