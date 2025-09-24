const tracklink = {
  urls: null,
  init(urls) {
    this.urls = urls;
    if (!this.urls || Object.keys(this.urls).length === 0) {
      console.error('[tracklink] urls is undefined or empty');
      return;
    }

    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && this.urls[href]) {
        link.addEventListener('click', e => {
          e.preventDefault();
          window.open(this.urls[href], '_blank');
        });
      }
    });
  }
};

export default tracklink;

// Для подключения через <script>
if (typeof window !== 'undefined') {
  window.tracklink = tracklink;
}
