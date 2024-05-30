$(document).ready(function () {
  function loadPage(page) {
    $("#app").load(`${page}.html`);
  }

  function handleRouting() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      loadPage(hash);
    } else {
      loadPage("Home");
    }
  }

  // Handle initial load
  handleRouting();

  // Handle hash change
  $(window).on("hashchange", function () {
    handleRouting();
  });

  // Handle navigation clicks (optional)
  $("#nav a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    window.location.hash = target;
  });
});
