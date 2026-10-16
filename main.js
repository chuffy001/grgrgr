function changeMode(mode) {
            let site = document.querySelector('#site');

            if (mode === 'light') {
                site.style.backgroundColor = '#C4B5A5';
                site.style.color = 'black';
            }

            if (mode === 'dark') {
                site.style.backgroundColor = 'black';
                site.style.color = 'white';
            }
        }