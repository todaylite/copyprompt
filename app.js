// Service Worker Register
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('✅ Service Worker registered:', reg.scope))
    .catch(err => console.log('❌ Service Worker failed:', err));
}

// Install Prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';
});

installBtn.addEventListener('click', () => {
  installBtn.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => {
    console.log('User choice:', choice.outcome);
    deferredPrompt = null;
  });
});
