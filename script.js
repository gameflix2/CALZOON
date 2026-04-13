// Nav links active state
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Tab buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Game cards hover effect
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => {
    alert('Faça login para jogar!');
  });
});

// Promo buttons
document.querySelectorAll('.promo-cta').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Faça seu cadastro para aproveitar esta promoção!');
  });
});

// Register button
document.querySelector('.btn-register').addEventListener('click', () => {
  alert('Página de cadastro em breve!');
});

// Login button
document.querySelector('.btn-login').addEventListener('click', () => {
  alert('Página de login em breve!');
});

// Search box
document.querySelector('.search-box input').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.game-card').forEach(card => {
    const name = card.querySelector('.game-name').textContent.toLowerCase();
    card.style.display = name.includes(term) ? 'block' : 'none';
  });
});
