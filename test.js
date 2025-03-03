import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { house: "Blake", count: 10 },
    { house: "Halberg", count: 20 },
    { house: "Hillary", count: 15 },
    
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.house),
        datasets: [
          {
          data: data.map(row => row.count),
          backgroundColor: ['rgb(0,0,255)','rgb(225,0,0)','rgb(255,255,0)']
          }
        ]
      }
    }
  );
})();