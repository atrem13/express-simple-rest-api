import express from 'express';
const models = require('../models');
const Posts = models.posts; 

const router = express.Router();

router.get('/', async function(req, res, next){
    try {
        const posts = await Posts.findAll({});
        if(posts.length > 0){
            res.json({
                'status': 'ok',
                'message': 'list data posts',
                'data': posts,
            });    
        }else{
            res.json({
                'status': 'ok',
                'message': 'empty data posts',
                'data': [],
            });
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error'
          })
    }
});

router.get('/:id', async function(req, res, next){
    try {
        const id = req.params.id;
        const posts = await Posts.findByPk(id);
        if(posts){
            res.json({
                'status': 'ok',
                'message': 'detail data posts',
                'data': posts,
            });    
        }else{
            res.status(404).json({
                'status': 'not found',
                'message': 'data posts not found',
                'data': null,
            });
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error'
          })
    }
});

router.post('/', function(req, res, next){
    res.send('router create posts');
});

router.put('/:id', function(req, res, next){
    res.send('router update posts');
});

router.delete('/:id', function(req, res, next){
    res.send('router delete posts');
});

export default router;