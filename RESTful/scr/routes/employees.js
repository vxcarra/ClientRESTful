const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', async (req, res) => {
    res.redirect('/employees');
});

router.get('/add', (req, res) => {
    res.render('employees/add');
});

router.post('/add', async(req, res) => {
    const { id, userId, firstName, lastName, email, password } = req.body;
    const newEmployee = { id, userId, firstName, lastName, email, password };
    await pool.query('INSERT INTO employees SET ?', [newEmployee]);
    res.redirect('/employees');
});

//////////////////////////////////////////////////////////////////////////

router.get('/', async(req, res) => {
    const employees = await pool.query('SELECT * FROM employees');
    res.render('employees/list', {employees});
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const employees = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
    res.render('employees/list', {employees});
});


router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    res.redirect('/employees');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const employees = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
    res.render('employees/edit', {employee: employees[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { id, userId, firstName, lastName, email, password} = req.body;
    const newEmployee = { id, userId, firstName, lastName, email, password };
    await pool.query('UPDATE employees SET ? WHERE id = ?', [newEmployee, id]);
    res.redirect('/employees');
});

module.exports = router;