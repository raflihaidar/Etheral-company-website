function sendwhatsapp() {
  var phonenumber = "+6282121291256";

  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var Service = document.getElementById("Service").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var addres = document.getElementById("address").value;
  var request = document.getElementById("request").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Halo Admin,saya ingin melakukan booking di *Ethereal Fotografi Tulungagung*" +
    "%0a" +
    "%0a" +
    "*Nama     :* " +
    name +
    "%0a" +
    "*Email    :* " +
    email +
    "%0a" +
    "*Layanan  :* " +
    Service +
    "%0a" +
    "*Tanggal  :* " +
    date +
    "%0a" +
    "*Waktu    :* " +
    time +
    "%0a" +
    "*Lokasi   :* " +
    addres +
    "%0a" +
    "*Catatan  :* " +
    request +
    "%0a" +
    "%0a" +
    "Terimakasih telah melakukan booking di Ethereal Fotografi" +
    "%0a";

  window.open(url, "_blank").focus();
}
