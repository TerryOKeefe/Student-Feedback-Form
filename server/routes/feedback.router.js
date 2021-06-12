const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool');

// POST
router.post('/', (req, res) => {
    // console log in terminal
    console.log('In POST');
    console.log(req.body);
    // variable for req.body
    let feedback = req.body;

    // query to send to database with sanitized values
    const queryText = `INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES($1, $2, $3, $4);`;

    // pool query with inputs from components
    pool.query(queryText, [
        feedback.feeling,
        feedback.understanding,
        feedback.support,
        feedback.comments
    ])
        .then((result) => {
            // send created status
            res.sendStatus(201);
            console.log('Result from POST', result);
        })
        .catch((error) => {
            console.log('Error in POST', error);
        })
})

// GET
router.get('/', (req, res) => {
    // query to run in database
    let queryText = `
        SELECT "feeling", "understanding", "support", "comments"
        FROM "feedback"
        ORDER BY "id" DESC;`
        ;
    // pool query to send to database
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log('Error in GET router', error);
        res.sendStatus(500);
    })
})

module.exports = router;