document.addEventListener('DOMContentLoaded', init, false);
function init() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(
      (reg) => {
        console.log(`Service worker registered ${reg}`);
      },
      (err) => {
        console.log(`Service worker not registered ${err}`);
      }
    );
  } else {
    console.log(`Service worker not supported`);
  }
}
