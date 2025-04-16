git clone https://github.com/Maryann-beep/AfriHustle_Project.git
cd AfriHustle_Project
<!-- Link to the Original Repository  -->
git remote add upstream https://github.com/Ntoko-Favoh/AfriHustle_Project.git
<!-- Verify Remotes -->
git remote -v

<!-- You should see: -->
origin    https://github.com/your-username/AfriHustle_Project.git (fetch/push)  
upstream  https://github.com/Ntoko-Favoh/AfriHustle_Project.git (fetch/push)



<i class="fa-solid fa-user"></i>
<i class="fa-solid fa-envelope"></i>
<i class="fa-solid fa-calendar"></i>
<i class="fa-solid fa-lock"></i>
<i class="fa-solid fa-paperclip"></i>
<i class="fa-solid fa-arrow-right"></i>
<i class="fa-solid fa-arrow-left"></i>



// Form validation for sign up
function handleSignUp(e) {
    e.preventDefault();
    const password = e.target.password.value;
    const errorElement = document.getElementById('password-error');

    if (password.length < 8) {
        errorElement.style.display = 'block';
        return;
    }
    
    errorElement.style.display = 'none';
    // Here you would normally send data to a server
    alert('Sign up successful! (Demo only)');
}






<!-- -------- -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In / Sign Up</title>
    <link rel="stylesheet" href="signin.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="main-container">

        <div class="hero-section">
            
        </div>

        <div class="auth-container">

            <!-- login page heading -->
          <h3 style="color: #1c1c1c;">Sign into your <span class="bold_text" style="color: #1c1c1c;">AFRIHUSTLE</span> account</h3>


          
            <!-- Sign In Form -->

            <form id="signin-form" class="form" onsubmit="handleSignIn(event)">

                 <!-- "Username" -->
                <label for="username">Username</label>
                <input type="text" name="username" required>
                
                <!-- "Password" -->
                <label for="password">Password</label>
                <input type="password" name="password" required>
                
            <div class="flex-container">
                    <!-- "Remember me" -->
                <div class="rem-input-flex">
                    <input type="checkbox" name="remember" id="remember" style="cursor: pointer;">
                    <label for="remember" style="margin-left: 0.5rem;">Remember me <span class="rem-warning-message">(Do not use this on public devices)</span></label>
                </div>
                    <!-- forgotten password -->
                    <a href="" id="forgotten">Forgotten password</a>
            </div>

            <!-- Don't have an account? -->
            <p class="login-opt">Don't have an account? <a  href="" class="toggle-btn" onclick="showForm('signup')">Sign Up</ba></p>

                <!-- "submit btn" -->
                <button type="submit">Login</button>

                <p class="login-opt">Or Login using</p>
                <div class="flex-icons">
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-apple "></i>
                    <i class="fa-brands fa-facebook "></i>
                </div>
            </form>


          
            <!-- Sign Up Form -->
            <form id="signup-form" class="form hidden" onsubmit="handleSignUp(event)">
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="Username" required>

                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" required>

                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" required>

                <!-- Already have an account?  -->
                <p class="login-opt">Already have an account? <a class="toggle-btn active" onclick="showForm('signin')">Sign In</a></p>

                <div class="error-message" id="password-error">Password must be at least 8 characters</div>
                <button type="submit">Create Account</button>
        </form>
    </div>

</div>

    <script src="signin.js">
        
    </script>
</body>
</html>




<!-- JS TOGGLE -->

// Toggle between forms
function showForm(formType) {
    // Toggle forms
    document.getElementById('signin-form').classList.toggle('hidden', formType !== 'signin');
    document.getElementById('signup-form').classList.toggle('hidden', formType !== 'signup');

    // Update button styles
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(formType));
    });
}
