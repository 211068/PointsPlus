const ctx = document.querySelector("my-chart");

fetch("data.json")
  .then(function (response) {
    if (response.ok == true) return response.json();
  })

  .then(function (data) {
    createChart(data, "bar");
  });

function createChart(data, type) {
  new Chart(ctx, {
    type: type,
    data: {
      labels: data.map((row) => row.house),
      datasets: [
        {
          data: data.map((row) => row.count),
          backgroundColor: ["rgb(0,0,255)", "rgb(225,0,0)", "rgb(255,255,0)"],
        },
      ],
    },
  });
}
