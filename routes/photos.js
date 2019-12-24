const express = require('express');
const router = express.Router();

const Photo = require('../models/Photo');


router.get('/', async (req, res)=> {
    try {
        const photos = await Photo.find();
        res.json(photos);
        
    } catch (error) {
        res.json({message: error})
    }

});

router.get('/:photoId', async (req, res)=> {
    try {
        const photo = await Photo.findById(req.params.photoId);
        res.json(photo);
        
    } catch (error) {
        res.json({message: error})
        console.log(error)
    }

});


//Adding photo 
router.post('/', async (req, res)=>{
    try {
        const photo = new Photo({
            name: req.body.name,
            url: req.body.url,
            description: req.body.description
        });

        const savePhoto = await photo.save();
        res.json(savePhoto);

    } catch (error) {
        res.json({message: error})
    }
  
});

//Updating photo

router.patch('/:photoId', async (req, res) =>{
    try {
        const updatePhoto = await Photo.updateOne(
            { '_id': req.params.photoId },
             {$set:{
                name: req.body.name,
                url: req.body.url,
                description: req.body.description
             }});
        res.json(updatePhoto);
    } catch (error) {
        res.json({message: error})
    }
});

//Deleting photo
router.delete('/:photoId', async (req, res) =>{
    try {
        const removePhoto = await Photo.remove({ '_id': req.params.photoId });
        res.json(removePhoto);
    } catch (error) {
        res.json({message: error})
    }
});



module.exports = router;