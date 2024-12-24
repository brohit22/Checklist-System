function evaluateChecklist(data) {
  const rules = [
    { rule: 'Valuation Fee Paid', passed: data.isValuationFeePaid === true },
    { rule: 'UK Resident', passed: data.isUkResident === true },
    { rule: 'Risk Rating Medium', passed: data.riskRating === 'Medium' },
    {
      rule: 'LTV Below 60%',
      passed: calculateLTV(data.loanRequired, data.purchasePrice) < 60,
    },
  ];
  return rules;
}

function calculateLTV(loanRequired, purchasePrice) {
  return (loanRequired / purchasePrice) * 100;
}

module.exports = { evaluateChecklist };
