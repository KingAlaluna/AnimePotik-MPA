if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
    } catch (e) {
      console.error('помилка sw-init', e);
    }
  });
}
