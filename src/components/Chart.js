export default function Chart(config) {
    const container = document.createElement('div');
    container.classList.add('chart-container');

    const title = document.createElement('h3');
    title.textContent = config.title;

    const canvas = document.createElement('canvas');

    container.appendChild(title);
    container.appendChild(canvas);

    new window.Chart(canvas, {
        type: 'line',
        data: config.data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return container;
}
