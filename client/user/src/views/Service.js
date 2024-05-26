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
                </div>
                    <div class="help">
                        <div class="text">
                            <a href="#">lorem ipsum asu asu asu</a>
                        </div>
                    <div class="button">
                    <a href="#">view more</a>
                </div>
                    </div>
                </div>

                <div class="box">
                <div class="img">
                </div>
                    <div class="help">
                        <div class="text">
                            <a href="#">lorem ipsum asu asu asu</a>
                        </div>
                    <div class="button">
                    <a href="#">view more</a>
                </div>
                    </div>
                </div>

                <div class="box">
                <div class="img">
                </div>
                    <div class="help">
                        <div class="text">
                            <a href="#">lorem ipsum asu asu asu</a>
                        </div>
                    <div class="button">
                    <a href="#">view more</a>
                </div>
                    </div>
                </div>

                <div class="box">
                <div class="img">
                </div>
                    <div class="help">
                        <div class="text">
                            <a href="#">lorem ipsum asu asu asu</a>
                        </div>
                    <div class="button">
                    <a href="#">view more</a>
                </div>
                    </div>
                </div>

                <div class="box">
                <div class="img">
                </div>
                    <div class="help">
                        <div class="text">
                            <a href="#">lorem ipsum asu asu asu</a>
                        </div>
                    <div class="button">
                    <a href="#">view more</a>
                </div>
                    </div>
                </div>
            </div>
        `;
    }
}
