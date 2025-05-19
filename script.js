// Dark mode toggle
document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Support ticket system
  const ticketForm = document.getElementById('ticketForm');
  const ticketList = document.getElementById('ticketList');
  
  ticketForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('username').value.trim();
    const issue = document.getElementById('issue').value.trim();
  
    if (name && issue) {
      const ticket = document.createElement('div');
      ticket.classList.add('ticket');
      ticket.innerHTML = `<strong>${name}</strong>: ${issue}`;
      ticketList.appendChild(ticket);
      ticketForm.reset();
    }
  });
  