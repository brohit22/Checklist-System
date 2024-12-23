export const rules = [
  { rule: 'Valuation Fee Paid', field: 'isValuationFeePaid', expected: true },
  { rule: 'UK Resident', field: 'isUkResident', expected: true },
  { rule: 'Risk Rating Medium', field: 'riskRating', expected: 'Medium' },
  {
    rule: 'LTV Below 60%',
    field: 'ltv',
    validate: (data) => (data.loanRequired / data.purchasePrice) * 100 < 60,
  },
];
