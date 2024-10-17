// Define the Node class to represent the AST
class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;  // 'operator' for AND/OR, 'operand' for conditions
        this.left = left;  // Left child for operators
        this.right = right; // Right child for operators
        this.value = value; // Value for operands (e.g., age > 30)
    }
}

// Function to create an AST from a rule string
function createRule(ruleString) {
    const operators = ['AND', 'OR'];
    
    const isOperator = (str) => operators.includes(str.toUpperCase());
    
    function parseRule(rule) {
        let tokens = rule.split(/(AND|OR|\(|\))/).filter(token => token.trim() !== '');
        return tokens.map(token => token.trim());
    }
    
    function buildAST(tokens) {
        let stack = [];
        let current = null;
        
        tokens.forEach(token => {
            if (token === '(') {
                stack.push(current);
                current = null;
            } else if (token === ')') {
                let node = current;
                current = stack.pop();
                if (current && current.right === null) {
                    current.right = node;
                } else {
                    current = node;
                }
            } else if (isOperator(token)) {
                let node = new Node('operator', current, null, token);
                current = node;
            } else {
                let node = new Node('operand', null, null, token);
                if (current && current.type === 'operator' && current.right === null) {
                    current.right = node;
                } else {
                    current = node;
                }
            }
        });
        
        return current;
    }

    const tokens = parseRule(ruleString);
    return buildAST(tokens);
}

// Function to evaluate an AST against user data
function evaluateRule(ast, data) {
    if (ast.type === 'operand') {
        return evaluateOperand(ast.value, data);
    } else if (ast.type === 'operator') {
        const leftResult = evaluateRule(ast.left, data);
        const rightResult = evaluateRule(ast.right, data);
        
        if (ast.value.toUpperCase() === 'AND') {
            return leftResult && rightResult;
        } else if (ast.value.toUpperCase() === 'OR') {
            return leftResult || rightResult;
        }
    }
    return false;
}

// Helper function to evaluate operands like "age > 30"
function evaluateOperand(operand, data) {
    const [attribute, operator, value] = operand.split(/\s+/);
    const dataValue = data[attribute];
    
    switch (operator) {
        case '>':
            return dataValue > parseFloat(value);
        case '<':
            return dataValue < parseFloat(value);
        case '=':
            return dataValue == value.replace(/['"]+/g, '');
        default:
            return false;
    }
}

module.exports = { createRule, evaluateRule };
