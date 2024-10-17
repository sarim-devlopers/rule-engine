import React, { useState } from 'react';
import './App.css';

function App() {
  const [rule, setRule] = useState('');
  const [userData, setUserData] = useState({ age: '', department: '', salary: '', experience: '' });
  const [result, setResult] = useState(null);

  const handleRuleChange = (e) => {
    setRule(e.target.value);
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rule, userData }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <h1>Rule Engine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rule:</label>
          <textarea value={rule} onChange={handleRuleChange} rows="4" cols="50" />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleUserDataChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={userData.department}
            onChange={handleUserDataChange}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={userData.salary}
            onChange={handleUserDataChange}
          />
        </div>
        <div>
          <label>Experience:</label>
          <input
            type="number"
            name="experience"
            value={userData.experience}
            onChange={handleUserDataChange}
          />
        </div>
        <button type="submit">Evaluate Rule</button>
      </form>

      {result !== null && (
        <div className="result">
          <h2>Result:</h2>
          <p>{result ? 'Eligible' : 'Not Eligible'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
