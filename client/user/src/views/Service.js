import AbstractView from "../../../utils/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <div class="container">
                <div class="box">
                 <div class="img">
                    <img src="/user/src/assets/images.jpg" alt="slide image" class="hover-img"/>
                 </div>
                 <div class="help">
                        <div class="text">
                            <h3>Fotografi dan Videografi Wedding</h3>
                            <a>Layanan fotografi wedding kami dirancang untuk mengabadikan momen-momen istimewa di hari pernikahan Anda.
                            Kami menawarkan berbagai paket yang dapat disesuaikan dengan kebutuhan dan anggaran Anda. Mulai dari sesi pre-wedding,
                            dokumentasi acara dari persiapan hingga resepsi, hingga album foto eksklusif. Dengan fotografer berpengalaman, 
                            kami memastikan setiap detil dan emosi tertangkap dengan sempurna.</a>
                        </div>
                        <div class="button">
        <a href="#" id="popupButton">Click me</a>
    </div>

    <div id="popup" class="popup">
        <div class="popup-content">
            <span class="close">&times;</span>
            <p>This is a popup message!</p>
        </div>
    </div>
                    </div>
                </div>

               
        `;
    }
}

window.onload = function(){
    document.getElementById('popupButton').onclick = function (event) {
        event.preventDefault();
        document.getElementById('popup').style.display = 'block';
    }
    
    document.getElementsByClassName('close')[0].onclick = function () {
        document.getElementById('popup').style.display = 'none';
    }
    
    window.onclick = function (event) {
        if (event.target == document.getElementById('popup')) {
            document.getElementById('popup').style.display = 'none';
        }
    }
}



