export const getChecklist = (req, res) => {
  try {
    // Mocked data
    const checklist = [
      { rule: 'Valuation Fee Paid', status: 'Passed' },
      { rule: 'UK Resident', status: 'Failed' },
    ];
    res.status(200).json({ success: true, data: checklist });
  } catch (error) {
    console.error('Error in getChecklist:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
