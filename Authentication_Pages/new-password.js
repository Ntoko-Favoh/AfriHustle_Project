const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const token = new URLSearchParams(location.search).get('token');

newPassword.addEventListener('input', () => {
  document.getElementById('lengthCheck').style.color = 
    newPassword.value.length >= 8 ? '#4CAF50' : '#666';
  document.getElementById('numberCheck').style.color = 
    /\d/.test(newPassword.value) ? '#4CAF50' : '#666';
});

confirmPassword.addEventListener('input', () => {
  const error = document.getElementById('matchError');
  if (confirmPassword.value !== newPassword.value) {
    error.style.display = 'block';
    error.textContent = 'Passwords do not match';
  } else {
    error.style.display = 'none';
  }
});

document.getElementById('passwordForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
    await fetch('/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        token,
        password: newPassword.value 
      })
    });
    window.location.href = 'reset-success.html';
  } catch (error) {
    alert('Reset failed');
  }
});