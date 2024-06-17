$(document).ready(function () {
  function loadPage(page) {
    if (page === "form") {
      $("#nav").hide();
      $("#footer").hide();
    } else if (page === "gallery") {
      $("#footer").hide();
    } else {
      $("#nav").show();
      $("#footer").show();
    }
    $("#app").load(`${page}.html`);
  }

  function handleRouting() {
    const hash = window.location.hash.substring(1);
    if (hash && hash != "top") {
      loadPage(hash);
      // Menghapus kelas nav-active dari semua elemen navigasi
      $("nav a").removeClass("nav-active");
      // Menambahkan kelas nav-active pada elemen yang sesuai
      $("#" + hash).addClass("nav-active");
    } else {
      loadPage("Home");
      $("#home").addClass("nav-active");
    }
  }

  // Handle initial load
  handleRouting();

  // Handle hash change
  $(window).on("hashchange", function () {
    handleRouting();
  });

  // Handle navigation clicks (optional)
  $("nav a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href").substring(1);
    window.location.hash = target;
  });
});
