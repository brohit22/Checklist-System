const { fetchApplicationData } = require('../services/apiService');
const { checklistRules } = require('../utils/checklistRules');

const getChecklist = async (req, res) => {
  try {
    const data = await fetchApplicationData();
    const checklist = checklistRules(data);

    const results = checklist.map((item) => ({
      rule: item.rule,
      status: item.condition ? 'Passed' : 'Failed',
    }));

    res.json(results);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getChecklist };
