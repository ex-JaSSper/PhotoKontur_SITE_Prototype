/* Поправки только для публичного демо.
   В прототипе экраны собраны для суперадмина платформы. Для демо руководителя студии
   прячем выбор компании: он видит одну активную компанию, переключатель — в шапке. */
(function () {
  function hideCompanyFilters() {
    document.querySelectorAll('.select, .ffield').forEach(function (el) {
      var label = el.querySelector('.ph, .ff-l');
      var text = label ? label.textContent.trim().toLowerCase() : '';
      if (text === 'компания') el.style.display = 'none';
    });
  }

  function hideCompanyColumn() {
    document.querySelectorAll('table').forEach(function (table) {
      var heads = table.querySelectorAll('thead th');
      heads.forEach(function (th, i) {
        if (th.textContent.trim() !== 'Компания') return;
        table.querySelectorAll('tr').forEach(function (tr) {
          var cell = tr.children[i];
          if (cell) cell.style.display = 'none';
        });
      });
    });
  }

  function run() { hideCompanyFilters(); hideCompanyColumn(); }

  var timer = null;
  function schedule() { clearTimeout(timer); timer = setTimeout(run, 30); }

  function start() {
    run();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
