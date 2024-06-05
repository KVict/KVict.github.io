fetch('info.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        lines.forEach(line => {
            const [key, value] = line.split(':');
            const trimmedKey = key.trim();
            const trimmedValue = value.trim();
            if (trimmedKey === 'name') {
                document.getElementById('name').textContent = trimmedValue;
                document.getElementById('name-footer').textContent = trimmedValue;
            } else if (trimmedKey === 'email') {
                document.getElementById('email').textContent = trimmedValue;
            }
        });
    })
    .catch(error => console.log('Error fetching text file:', error));
