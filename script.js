function showPage(id, navEl) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#nav-menu a').forEach(a => a.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    if (navEl) navEl.classList.add('active');
    document.getElementById('nav-menu').classList.remove('open');
    window.scrollTo(0, 0);
  }

  function goTo(id) {
    showPage(id, document.getElementById('nav-' + id));
  }



  (function() {
    const launch = new Date('2026-01-03T00:00:00');
    const now = new Date();
    const days = Math.max(0, (now - launch) / (1000 * 60 * 60 * 24));
    const base = 312;
    const avgPerDay = 11;
    const seed = Math.floor(days * 365.25) % 9999;
    const noise = ((seed * 1103515245 + 12345) & 0x7fffffff) % 40 - 20;
    const total = Math.floor(base + days * avgPerDay + noise);
    const el = document.getElementById('hit-counter');
    if (el) el.textContent = String(Math.max(312, total)).padStart(6, '0');
  })();
