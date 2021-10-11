const projectSchema = require('../models/projectModel');


exports.getProject = async (req, res) => {
    try {
        const project = await projectSchema.find(req.body);
        res.json(project);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

exports.addProject = async (req, res) => {
    const { title, product_id, date, description, images } = req.body;

    try {
        const project = new projectSchema({
            title, 
            product_id, 
            description, 
            date,
            images
        })
        await project.save();
        res.json({msg:"product added"});
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

exports.getProjectID = async (req, res) => {
    try {
        const project = await projectSchema.findById(req.params.id)
        res.json(project)
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

}

exports.updateProject = async (req, res) => {
    const { title, product_id, description, images } = req.body;

    try {
        const project = await projectSchema.findByIdAndUpdate(req.params.id, {
            title, 
            product_id, 
            description, 
            images
        });

        let results = project.save()
        await results
        res.json({ msg: 'Items Updated' })
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

exports.delProject = async (req, res) => {
    try {
        const project = await projectSchema.findByIdAndDelete(req.params.id);

        project;
    
        res.json({msg:"Item deleted"})
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}