import Chart from './Chart.js';

export default function Dashboard() {
    const element = document.createElement('div');
    element.classList.add('dashboard');

    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            const chartConfigs = [
                {
                    title: 'Daily active users',
                    data: {
                        labels: ['Jun 12', 'Jun 19', 'Jun 26', 'Jul 3', 'Jul 10'],
                        datasets: [{
                            label: 'Daily active users',
                            data: data.dailyActiveUsers,
                            borderColor: 'blue',
                            fill: false
                        }]
                    }
                },
                {
                    title: 'Seven day active users',
                    data: {
                        labels: ['Jun 12', 'Jun 19', 'Jun 26', 'Jul 3', 'Jul 10'],
                        datasets: [{
                            label: 'Seven day active users',
                            data: data.sevenDayActiveUsers,
                            borderColor: 'blue',
                            fill: false
                        }]
                    }
                },
                {
                    title: 'Twenty-eight day active users',
                    data: {
                        labels: ['Jun 12', 'Jun 19', 'Jun 26', 'Jul 3', 'Jul 10'],
                        datasets: [{
                            label: 'Twenty-eight day active users',
                            data: data.twentyEightDayActiveUsers,
                            borderColor: 'blue',
                            fill: false
                        }]
                    }
                },
                {
                    title: 'Response count',
                    data: {
                        labels: ['Jun 12', 'Jun 19', 'Jun 26', 'Jul 3', 'Jul 10'],
                        datasets: [{
                            label: 'Response count',
                            data: data.responseCount,
                            borderColor: 'blue',
                            fill: false
                        }]
                    }
                }
            ];

            chartConfigs.forEach(config => {
                element.appendChild(Chart(config));
            });
        });

    return element;
}
