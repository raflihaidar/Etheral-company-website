$(document).ready(function () {
  function loadPage(page) {
    if (page == "form") {
      $("#nav").hide();
      $("#footer").hide();
    } else {
      $("#nav").show();
      $("#footer").show();
    }
    $("#app").load(`${page}.html`);
  }

  function handleRouting() {
    const hash = window.location.hash.substring(1);
    console.log(hash);
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
  $("a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    window.location.hash = target;
    console.log(target);
  });
});
