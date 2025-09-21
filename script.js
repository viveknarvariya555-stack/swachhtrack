// document.getElementById('loginForm').addEventListener('submit', async function(e) {
//     e.preventDefault(); // prevent default form submission

//     const mobile = document.getElementById('number').value;
//     const password = document.getElementById('password').value;

//     try {
//         const response = await fetch('https://845a84e0c844.ngrok-free.app/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'ngrok-skip-browser-warning': 1  

//             },
//             body: JSON.stringify({ mobile: mobile, password: password })
//         });

//         const data = await response.json();

//         if (response.status === 200) {
//             const role = data.role; // make sure your API returns { role: 'citizen'/'driver'/'admin', ... }

//             // Redirect based on role
//             if (role === 'admin') {
//                 window.location.href = 'admin-dashboard.html';
//             } else if (role === 'citizen') {
//                 window.location.href = 'citizen-home.html';
//             } else if (role === 'driver') {
//                 window.location.href = 'driver-home.html';
//             } else {
//                 alert('Unknown role');
//             }
//         } else {
//             alert(data.error || 'Login failed');
//         }
//     } catch (err) {
//         console.error(err);
//         alert('Server error');
//     }
// });


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submit

    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;

    // Hardcoded users
    const users = [
        { mobile: '1111111111', password: 'admin123', type: 'admin', redirect: 'admin-dashboard.html' },
        { mobile: '2222222222', password: 'citizen123', type: 'citizen', redirect: 'citizen-home.html' },
        { mobile: '3333333333', password: 'driver123', type: 'driver', redirect: 'driver-home.html' }
    ];

    const user = users.find(u => u.mobile === number && u.password === password);

    if (user) {
        alert(`Login successful! Redirecting to ${user.type} page.`);
        window.location.href = user.redirect; // redirect to appropriate page
    } else {
        alert('Invalid mobile number or password!');
    }
});
