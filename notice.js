(function () {
  // don’t show again if user closed it
  if (window.localStorage && localStorage.getItem('legacyNoticeClosed') === '1') return;

  // create bar
  var bar = document.createElement('div');
  bar.id = 'legacy-notice';
  bar.innerHTML =
    '<span>' +
    'Attenzione! <br/>' +
    'Questo sito non è più mantenuto. Riporta le mie attività da rappresentante dei dottorandi nel Senato accademico dell\'Università degli Studi di Milano (2015-2018).<br/>' +
    'Notice! <br/>' +
    'This website is no longer maintained. It reports of my activities as Ph.D. student representative in the Academic Senate at the University of Milan during years 2015-2018.' +
    '</span>' +
    '<button id="legacy-close" aria-label="Chiudi avviso">×</button>';

  // basic styles
  bar.style.position = 'fixed';
  bar.style.top = '0';
  bar.style.left = '0';
  bar.style.right = '0';
  bar.style.background = '#222';
  bar.style.color = '#fff';
  bar.style.padding = '10px 16px';
  bar.style.display = 'flex';
  bar.style.justifyContent = 'space-between';
  bar.style.alignItems = 'center';
  bar.style.gap = '12px';
  bar.style.zIndex = '9999';
  bar.style.fontSize = '14px';

  document.body.appendChild(bar);

  // push content down
  document.body.style.marginTop = '48px';

  // close button
  var btn = document.getElementById('legacy-close');
  if (btn) {
    btn.style.background = 'transparent';
    btn.style.border = 'none';
    btn.style.color = '#fff';
    btn.style.fontSize = '18px';
    btn.style.cursor = 'pointer';
    btn.style.lineHeight = '1';
    btn.addEventListener('click', function () {
      bar.remove();
      document.body.style.marginTop = null;
      if (window.localStorage) {
        localStorage.setItem('legacyNoticeClosed', '1');
      }
    });
  }
})();
