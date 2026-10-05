  const ctx = document.getElementById('depositLoanChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels:reports.map(r => r.report_date),
      datasets: [{
        label: 'Deposit Amount',
        data: reports.map(r => r.deposit_amount),
        borderWidth: 1
      },
    {
      label: 'Loan Amount',
      data: reports.map(r => r.loan_amount),
      borderWidth: 1
    }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });