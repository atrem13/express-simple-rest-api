import express from 'express';

const router = express.Router();

route.get('/', function(req, res, next){
    res.send('router get all posts');
});

route.get('/:id', function(req, res, next){
    res.send('router get one posts');
});

route.post('/', function(req, res, next){
    res.send('router create posts');
});

route.put('/:id', function(req, res, next){
    res.send('router update posts');
});

route.delete('/:id', function(req, res, next){
    res.send('router delete posts');
});

export default router;