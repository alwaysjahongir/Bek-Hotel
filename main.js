function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  const sections = document.querySelectorAll('.reveal');
  function reveal() {
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < window.innerHeight - 100) {
        s.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('DOMContentLoaded', reveal);
  
  document.getElementById('bookingForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log('Заявка:', data);
    alert('Заявка отправлена! Проверьте консоль (для бэкенд‑связи нужно добавить сервер).');
    document.getElementById('thankMsg').classList.remove('hidden');
    e.target.reset();
  });
  