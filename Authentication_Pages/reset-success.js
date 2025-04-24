// Confetti Animation
(function() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Confetti logic from previous implementation
  })();
  
  // Auto-redirect
  let countdown = 5;
  setInterval(() => {
    document.getElementById('countdown').textContent = countdown--;
    if (countdown < 0) window.location.href = 'login.html';
  }, 1000);