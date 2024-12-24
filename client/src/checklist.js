// src/Checklist.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checklist = () => {
  const [checklist, setChecklist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChecklist() {
      try {
        const response = await axios.get('/api/checklist');
        setChecklist(response.data);
      } catch (error) {
        console.error('Error fetching checklist:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchChecklist();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='p-6 bg-white rounded shadow-lg'>
      <h1 className='text-2xl font-bold mb-4'>Checklist Evaluation</h1>
      <ul className='space-y-4'>
        {checklist.map((item, index) => (
          <li
            key={index}
            className={`p-4 rounded ${
              item.passed ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <span className='font-semibold'>{item.rule}:</span>
            <span>{item.passed ? 'Passed' : 'Failed'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
