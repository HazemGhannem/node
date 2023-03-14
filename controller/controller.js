const Student = require('../model/student.js')

const addStudent =async (req,res) =>{
    const {name,age,classe,note}=req.body

    const st= await Student.create({
        name,
        age,
        classe,
        note
    })
    res.json(st)

}
const getStudent =async (req,res) =>{
    const {id}=req.params

    const st= await Student.findOne({name:id})
    res.json(st)

}
const getallStudent =async (req,res) =>{

    const st= await Student.find()
    res.json(st)

}
const updateStudent =async (req,res) =>{
    const {id}=req.params
    const {name,age,classe,note}=req.body
    const st= await Student.findOne({name:id})
        st.name=name,
        st.classe=classe,
        st.age=age,
        st.note=note
        st.save()
    res.json(st)
}

const deleteStudent =async (req,res) =>{
    const {id}=req.params

    const st= await Student.deleteOne({name:id})
    res.json({st:'deleted'})

}
const grow =async (req,res) =>{
    const st= await Student.find({ age: { $gte: 18} })
    res.json(st)

}
const upgrade =async (req,res) =>{
    const st= await Student.find({ classe:"4twin5"  })
    st.forEach(s=>{s.note=s.note+2,
    s.save()})
    
    res.json(st)

}



module.exports={addStudent,getStudent,getallStudent,deleteStudent,updateStudent,grow,upgrade}