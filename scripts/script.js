  const ctx = document.getElementById('depositLoanChart');
  const crore = 10000000;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels:reports.map(r => r.report_date),
      datasets: [{
        label: 'Deposit Amount',
        data: reports.map(r => r.deposit_amount/crore),
        borderWidth: 1
      },
    {
      label: 'Loan Amount',
      data: reports.map(r => r.loan_amount/crore),
      borderWidth: 1
    }
    ]
    },
    options: {
      responsive:true,
      title:{display:true, text:"Deposit vs Loan (BDT crore)"},
      scales: {
        y: {
          beginAtZero: true, title: {display:true, text:"BDT CRORE"}
        },
        x:{
          beginAtZero: true, title: {display:true, text:"Reporting Date"}
        }
      }
    }
  });