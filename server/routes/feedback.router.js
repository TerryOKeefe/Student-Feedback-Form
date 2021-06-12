const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool');

// POST
router.post('/', (req, res) => {
    // console log in terminal
    console.log('In POST');

    // variable for req.body
    let feedback = req.body;
    
    // query to send to database
    const  queryText = `INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES($1, $2, $3, $4);`;
    
    // pool query
    pool.query(queryText, [
        feedback.feelings, 
        feedback.understanding, 
        feedback.support, 
        feedback.comments
    ])
    .then( (result) => {
        // send created status
        res.sendStatus(201);
        console.log('Result from POST', result);
    })
    .catch( (error) => {
        console.log('Error in POST', error);
    })
})

module.exports = router;