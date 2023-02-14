const express = require('express');
const router = express.Router()
const Contact = require('../Models/Contact.js')


router.route('/').get((req,res,next)=>{
    const contacts = Contact.find((err,cont)=>{
        if (err){
            console.log(`there is an err ${err}`)
        }
        res.status(200).json(cont)
    }
        
    );
    //res.json(contacts)
    
 

}).post((req,res,next)=>{
   const  { name , phone } = req.body;

        const contact = new Contact({
            name: name,
            phone: phone
        })
        contact.save((err, newContact)=>{
            if(err){
                console.log(`there is an err ${err}`)
            }else{
                res.json(newContact).status(200)
            }
        });
})

router.route('/update/:id').put((req,res,next)=>{
    const { id } = req.params
    const { name, phone } = req.body
    const contacts = Contact.findById(id,(err,cont)=>{
        if (err){
            console.log(`there is an err ${err}`)
        }
        cont.name=name,
        cont.phone=phone
        cont.save((err, newContact)=>{
            if(err){
                console.log(`there is an err ${err}`)
            }else{
                res.json(newContact).status(200)
            }
        });

    });
    
    

})

router.route('/:id').delete((req,res,next)=>{
    const { id } = req.params
    console.log(id)
    const contacts = Contact.findById(id);
    contacts.deleteOne((err,cont)=>{
        if (err){
            console.log(`there is an err ${err}`)
        }
        res.status(200).json({cont:"deleted"})
    })

}).delete((req,res,next)=>{
    const { id } = req.params
    const contacts = Contact.findById(id,(err,cont)=>{
        if (err){
            console.log(`there is an err ${err}`)
        }
        res.status(200).json(cont)
    });
})

module.exports=router