import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [checklistData, setChecklistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/checklist')
      .then((response) => {
        setChecklistData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Checklist Dashboard
        </h1>
        <motion.table
          className="min-w-full border-collapse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead>
            <tr>
              <th className="border p-2 text-left">Rule</th>
              <th className="border p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {checklistData.map((item, index) => (
              <motion.tr
                key={index}
                className={
                  item.status === 'Failed' ? 'bg-red-100' : 'bg-green-100'
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <td className="border p-2">{item.rule}</td>
                <td className="border p-2">
                  {item.status === 'Failed' ? (
                    <span className="flex items-center text-red-500">
                      <FaTimesCircle className="mr-2" />
                      {item.status}
                    </span>
                  ) : (
                    <span className="flex items-center text-green-500">
                      <FaCheckCircle className="mr-2" />
                      {item.status}
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default App;
