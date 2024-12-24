const checklistRules = (data) => [
  {
    rule: 'Valuation Fee Paid',
    condition: data.isValuationFeePaid === true,
  },
  {
    rule: 'UK Resident',
    condition: data.isUkResident === true,
  },
  {
    rule: 'Risk Rating Medium',
    condition: data.riskRating === 'Medium',
  },
  {
    rule: 'LTV Below 60%',
    condition: (data.loanRequired / data.purchasePrice) * 100 < 60,
  },
];

module.exports = { checklistRules };
