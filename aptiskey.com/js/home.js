document.addEventListener('DOMContentLoaded', function() {
          // Attach an event listener to the sign-out button
  document.getElementById('signOutBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Send a GET request to /logout to clear cookies and log the user out
    fetch('/logout', { method: 'GET' })
      .then(response => {
        // After logging out, redirect to the homepage (or login page)
        window.location.href = '/'; // Or replace with the desired redirect URL
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  });
});


window.onload = function() {
  // Hàm để đọc giá trị cookie theo tên
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // Lấy giá trị cookie 'displayName', nếu null thì hiển thị "Khách"
  const userName = getCookie('displayName');
  const displayName = userName ? decodeURIComponent(userName) : 'Khách'; // Kiểm tra nếu null thì gán "Khách"
  document.getElementById('userName').textContent = displayName; // Cập nhật tên người dùng vào phần tử có id='userName'
};



