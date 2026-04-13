const input = document.getElementById('input');
const output = document.getElementById('output');
const statusLight = document.getElementById('status-light');
const statusText = document.getElementById('status-text');

statusLight.style.backgroundColor = '#00ff00';
statusText.textContent = 'CONNECTED';

const print = (text) => {
    const line = document.createElement('div');
    line.style.color = '#00ff00';
    line.textContent = `> ${text}`;
    output.appendChild(line);
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        print(cmd);
        if (cmd === "scan") {
            print("INITIALIZING MAGNET OSINT SCANNERS...");
            print("SCRAPER STATUS: ACTIVE");
        } else if (cmd === "status") {
            print("SYSTEM: OPERATIONAL");
            print("REPO: PRIVATE");
        } else {
            print(`UNKNOWN COMMAND: ${cmd}`);
        }
        input.value = '';
    }
});
