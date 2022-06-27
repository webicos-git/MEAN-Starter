const express=require('express')
const Post=require('../models/Post')
const Note=require('../models/Note')
const expressAsyncHandler =require('express-async-handler');

router=express.Router();

router.get('/',  (req, res,next) =>{
    Post.find().then(function(posts){
        res.json(posts);
    }).catch(next);
   
});

router.post('/',expressAsyncHandler( async (req, res)=>{
    console.log(req.body)
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    })
    try {
        const dataToSave = await post.save();
        res.status(200).json(post)

    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}));

router.get('/:postId', async (req, res)=>{
    console.log(req.params.postId)
   const post= await  Post.findById(req.params.postId);
   res.json(post)
})

router.delete('/:postId', async (req, res)=>{
    console.log(req.params.postId)
   const post= await  Post.remove({_id:req.params.postId});
   res.json(post)
})

router.patch('/:postId', async (req, res)=>{
    try {
   const updateOn= await Post.updateOne({_id:req.params.postId},{
    $set: {title:req.body.title, description:req.body.description}
   })
   res.json(updateOn);
}
catch (err) {
    res.json("message", err)
}

});

module.exports = router;
