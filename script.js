document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (isValidTime(time)) {
        alert(`Obrigado, ${name}! Seu agendamento para ${service} em ${date} às ${time} foi realizado com sucesso.`);
    } else {
        alert('Por favor, escolha um horário válido.');
    }
});

function isValidTime(time) {
    const [hour, minute] = time.split(':').map(Number);
    const isWeekday = (new Date(document.getElementById('date').value).getDay() !== 6);
    return (isWeekday && hour >= 8 && hour < 17) || (!isWeekday && hour >= 8 && hour < 12);
}
