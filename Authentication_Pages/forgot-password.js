document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const method = btn.dataset.method;
      document.getElementById('resetEmail').style.display = method === 'email' ? 'block' : 'none';
      document.getElementById('resetPhone').style.display = method === 'sms' ? 'block' : 'none';
    });
  });
  
  document.getElementById('resetForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const method = document.querySelector('.tab-btn.active').dataset.method;
    const value = method === 'email' 
      ? document.getElementById('resetEmail').value
      : document.getElementById('resetPhone').value;
  
    try {
      const response = await fetch('/auth/request-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, value })
      });
  
      if (response.ok) {
        window.location.href = `verify-otp.html?method=${method}&target=${encodeURIComponent(value)}`;
      }
    } catch (error) {
      alert('Failed to send code');
    }
  });