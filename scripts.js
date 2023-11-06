document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');
    const darkModeButton = document.getElementById('darkModeButton');

    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeButton.textContent = 'Modo Claro';
        } else {
            darkModeButton.textContent = 'Modo Escuro';
        }
    });

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const currentTime = `${hours}:${minutes}:${seconds}`;
        timeElement.textContent = `Hora atual: ${currentTime}`;
    }

    updateTime(); // Chama a função para exibir o horário imediatamente
    setInterval(updateTime, 1000); // Atualiza a cada segundo
});
