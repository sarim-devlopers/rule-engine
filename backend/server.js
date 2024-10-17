const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createRule, evaluateRule } = require('./ruleEngine'); // Assuming you have ruleEngine.js

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/evaluate', (req, res) => {
  const { rule, userData } = req.body;
  
  try {
    // Create AST from rule string
    const ast = createRule(rule);

    // Evaluate rule with user data
    const result = evaluateRule(ast, userData);

    // Return the result to the frontend
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Error evaluating rule' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
