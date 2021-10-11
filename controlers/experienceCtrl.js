const experienceSchema = require('../models/experienceModel');


//get all users
exports.getExperience = async (req, res) => {
    const experience = await experienceSchema.find();
    try {
        res.json(experience);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

//add user
exports.addExperience = async (req, res) => {
    const { experience } = req.body;

    //first way async await
    try {
        const newExperience = new experienceSchema({
            experience: experience
        })
        await newExperience.save();
        res.json(newExperience);
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
exports.getExperienceID = async (req, res) => {
    //first way
    try {
        const experience = await experienceSchema.findById(req.params.id)
        res.json(experience)
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

    //second way
    // aboutSchema.findById(req.params.id)
    // .then(about=>res.json(about))
    // .catch(err=>res.status(400).json({msg:err}))
}


//update user by id
exports.updateExperience = async (req, res) => {
    try {
        const { experience } = req.body;
        const newExperience = await experienceSchema.findByIdAndUpdate(req.params.id, {
            experience
        });

        let results = newExperience.save()
        await results
        res.json({ msg: 'Items Updated' })
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}


//delete user by id
exports.delExperience = async (req, res) => {
    try {
        const experience = await experienceSchema.findByIdAndDelete(req.params.id);

        experience;
    
        res.json({msg:"Item deleted"})
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}