// Initialize OTP Inputs
const inputs = document.querySelectorAll('.otp-inputs .input-field');
const params = new URLSearchParams(location.search);
const method = params.get('method');
const target = params.get('target');

// Mask contact info
document.getElementById('maskedTarget').textContent = 
  method === 'email' 
    ? `****@${target.split('@')[1]}`
    : `+***${target.slice(-4)}`;

// OTP Navigation Logic (paste/backspace/auto-focus)
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (e.target.value.length === 1 && index < 5) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Resend Timer
let timer = 60;
const resendLink = document.getElementById('resendLink');

function updateTimer() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  resendLink.textContent = `Resend in ${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  if (timer-- <= 0) {
    resendLink.classList.remove('disabled');
    resendLink.textContent = 'Resend code';
    return;
  }
  setTimeout(updateTimer, 1000);
}
updateTimer();

// Verification Logic
document.getElementById('verifyBtn').addEventListener('click', async () => {
  const code = Array.from(inputs).map(i => i.value).join('');
  
  try {
    const response = await fetch('/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method, target, code })
    });

    const { token } = await response.json();
    window.location.href = `new-password.html?token=${token}`;
  } catch (error) {
    alert('Invalid code');
  }
});