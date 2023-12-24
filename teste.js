import axios from "axios";

axios
  .get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
  .then((response) => {
    const data = response.data;

    const times = [
      { morning: { start: 6, end: 12 } },
      { afternoon: { start: 12, end: 18 } },
      { night: { start: 18, end: 23 } },
    ];

    data.locations.forEach((location) => {
      const schedules = location.schedules || [];

      schedules.forEach(({ hour }) => {
        const numericHours = hour.replace(/\D/g, "");

        const hour1Int = parseInt(numericHours.substring(0, 2), 10);

        const hour2Int = parseInt(numericHours.substring(2, 4), 10);

        if (hour1Int >= 6 && hour2Int <= 12) {
          console.log("Manhã");
        }

        if (hour1Int >= 12 && hour2Int <= 18) {
          console.log("Tarde");
        }

        if (hour1Int >= 18 && hour2Int <= 23) {
          
        }

        if (isNaN(hour1Int) || isNaN(hour2Int)) {
          console.log("Não há horário disponível");
          return;
        }

        console.log(hour1Int, hour2Int);
      });
    });
  })

  .catch((error) => {
    console.error("Erro ao acessar os dados:", error);
  });
