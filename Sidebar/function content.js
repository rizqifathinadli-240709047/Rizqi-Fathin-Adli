function showContent(pageId) {
  // Sembunyikan semua konten
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Tampilkan konten yang dipilih
  document.getElementById(pageId).classList.add('active');
}
