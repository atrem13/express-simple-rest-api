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

router.post('/', async function(req, res, next){
    try {
        const {
            title,
            content,
            tags,
            published
        } = req.body;
        const posts = await Posts.create({
            title,
            content,
            tags,
            published
        });
        if(posts){
            res.json({
                'status': 'ok',
                'message': 'add data posts success',
                'data': posts,
            });    
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error'
          })
    }
    
});

router.put('/:id', async function(req, res, next){
    try {
        const id = req.params.id;
        const {
            title,
            content,
            tags,
            published
        } = req.body;
        const posts = await Posts.update({
            title,
            content,
            tags,
            published
        }, {
            where:{
                id: id
            }
        });
        if(posts){
            res.json({
                'status': 'ok',
                'message': 'update data posts success',
                'data': posts,
            });    
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error'
          })
    }
});

router.delete('/:id', async function(req, res, next){
    try {
        const id = req.params.id;
        const posts = await Posts.destroy({
            where:{
                id: id
            }
        });
        if(posts){
            res.json({
                'status': 'ok',
                'message': 'delete data posts success',
                'data': posts,
            });    
        }
    }catch(err){
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error'
          })
    }
});

export default router;