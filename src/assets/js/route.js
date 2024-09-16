$(document).ready(function () {
  function loadPage(page) {
    if (page === "Form") {
      $("#nav").hide();
      $("#footer").hide();
    } else if (page === "Gallery") {
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
      console.log("connected");
      loadPage(hash);
      console.log("#" + hash);
      // Menghapus kelas nav-active dari semua elemen navigasi
      $("nav a").removeClass("nav-active");
      // Menambahkan kelas nav-active pada elemen yang sesuai
      $("#" + hash).addClass("nav-active");
    } else {
      loadPage("Home");
      $("#Home").addClass("nav-active");
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
