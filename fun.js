document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body');

    fetch('https://pobreza-colombia-rest-api-production.onrender.com/api/hogar-depto')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const row = document.createElement('tr');

                Object.values(item).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
