'use strict';
const Router = require('koa-router');

var router = new Router();
router
    .get('/', function (ctx, next) {
        ctx.body = 'Hello World!!';
    })
    .post('/users', function (ctx, next) {
        // ...
    })
    .put('/users/:id', function (ctx, next) {
        // ...
    })
    .del('/users/:id', function (ctx, next) {
        // ...
    });




module.exports = {
    root: router
}