document.addEventListener('DOMContentLoaded', function() {
    // Form steps
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step1Indicator = document.getElementById('step1-indicator');
    const step2Indicator = document.getElementById('step2-indicator');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('registrationForm');
    
    // Country code selector
    const countryCode = document.getElementById('countryCode');
    const flag = document.getElementById('flag');
    
    // Update flag when country code changes
    countryCode.addEventListener('change', function() {
        const selectedOption = countryCode.options[countryCode.selectedIndex];
        const flagCode = selectedOption.getAttribute('data-flag');
        flag.src = `https://flagcdn.com/w20/${flagCode}.png`;
    });
    
    // Next button click handler
    nextBtn.addEventListener('click', function() {
        if (validateStep1()) {
            step1.classList.remove('active');
            step2.classList.add('active');
            step1Indicator.classList.remove('active');
            step1Indicator.classList.add('completed');
            step2Indicator.classList.add('active');
        }
    });
    
    // Previous button click handler
    prevBtn.addEventListener('click', function() {
        step2.classList.remove('active');
        step1.classList.add('active');
        step2Indicator.classList.remove('active');
        step1Indicator.classList.add('active');
        step1Indicator.classList.remove('completed');
    });
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep1() && validateStep2()) {
            // Form is valid, submit to server or redirect
            alert('Account created successfully! Redirecting to homepage...');
            window.location.href = '/'; // Redirect to homepage
        }
    });
    
    // Validation functions
    function validateStep1() {
        let isValid = true;
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Reset errors
        document.querySelectorAll('#step1 .error').forEach(el => el.style.display = 'none');
        
        // Validate full name
        if (fullName === '') {
            document.getElementById('fullNameError').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }
        
        // Validate phone
        if (!/^\d+$/.test(phone)) {
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        }
        
        // Validate date of birth
        if (dob === '') {
            document.getElementById('dobError').style.display = 'block';
            isValid = false;
        }
        
        // Validate password
        if (password.length < 8) {
            document.getElementById('passwordError').style.display = 'block';
            isValid = false;
        }
        
        // Validate confirm password
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').style.display = 'block';
            isValid = false;
        }
        
        return isValid;
    }
    
    function validateStep2() {
        let isValid = true;
        const businessName = document.getElementById('businessName').value.trim();
        const jobTitle = document.getElementById('jobTitle').value.trim();
        const skillType = document.getElementById('skillType').value;
        const experience = document.getElementById('experience').value;
        const documentInput = document.getElementById('document');
        
        // Reset errors
        document.querySelectorAll('#step2 .error').forEach(el => el.style.display = 'none');
        
        // Validate business name
        if (businessName === '') {
            document.getElementById('businessNameError').style.display = 'block';
            isValid = false;
        }
        
        // Validate job title
        if (jobTitle === '') {
            document.getElementById('jobTitleError').style.display = 'block';
            isValid = false;
        }
        
        // Validate skill type
        if (skillType === '') {
            document.getElementById('skillTypeError').style.display = 'block';
            isValid = false;
        }
        
        // Validate experience
        if (experience === '') {
            document.getElementById('experienceError').style.display = 'block';
            isValid = false;
        }
        
        // Validate document
        if (documentInput.files.length === 0) {
            document.getElementById('documentError').style.display = 'block';
            isValid = false;
        } else {
            const file = documentInput.files[0];
            const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                document.getElementById('documentError').textContent = 'Please upload a PDF, PNG, or JPG file';
                document.getElementById('documentError').style.display = 'block';
                isValid = false;
            }
        }
        
        return isValid;
    }
});