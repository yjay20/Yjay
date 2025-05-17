document.addEventListener('DOMContentLoaded', function () {
    let current = null;
  
    document.querySelector('#email').addEventListener('focus', function () {
      if (current) current.pause();
      current = animatePath(0, '240 1386');
    });
  
    document.querySelector('#password').addEventListener('focus', function () {
      if (current) current.pause();
      current = animatePath(-336, '240 1386');
    });
  
    document.querySelector('#submit').addEventListener('click', function (e) {
      e.preventDefault();
      if (current) current.pause();
      current = animatePath(-730, '530 1386');
  
      const email = document.querySelector('#email').value.trim();
      const password = document.querySelector('#password').value;
  
      if (email === 'yjay' && password === 'admin12345') {
        document.getElementById('loading-screen').style.display = 'flex';
  
        setTimeout(function () {
          window.location.href = "about.html";
        }, 2000);
      } else {
        alert('Invalid username or password.');
      }
    });
  
    function animatePath(offset, dasharray) {
      return anime({
        targets: 'path',
        strokeDashoffset: {
          value: offset,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: dasharray,
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    }
  });
  