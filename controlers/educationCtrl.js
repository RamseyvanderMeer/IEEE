const educationSchema = require('../models/educationModel');


//get all users
exports.getEducation = async (req, res) => {
    const education = await educationSchema.find();
    try {
        res.json(education);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

//add user
exports.addEducation = async (req, res) => {
    const { education } = req.body;

    //first way async await
    try {
        const newEducation = new educationSchema({
            education: education
        })
        await newEducation.save();
        res.json(newEducation);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

    //second way promises
    // const newAbout = new aboutSchema({
    //     about: about
    // })
    // newAbout.save()
    // .then(about=>res.json(`the article was sent`))
    // .catch(err=>res.status(500).json(`error:${err}`))

}


//get user by id
exports.getEducationID = async (req, res) => {
    //first way
    try {
        const education = await educationSchema.findById(req.params.id)
        res.json(education)
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

    //second way
    // aboutSchema.findById(req.params.id)
    // .then(about=>res.json(about))
    // .catch(err=>res.status(400).json({msg:err}))
}


//update user by id
exports.updateEducation = async (req, res) => {
    try {
        const { education } = req.body;
        const newEducation = await educationSchema.findByIdAndUpdate(req.params.id, {
            education
        });

        let results = newEducation.save()
        await results
        res.json({ msg: 'Items Updated' })
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}


//delete user by id
exports.delEducation = async (req, res) => {
    try {
        const education = await educationSchema.findByIdAndDelete(req.params.id);

        education;
    
        res.json({msg:"Item deleted"})
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}