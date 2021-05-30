// Header
class NavigationBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid container">
                <a class="navbar-brand" href="../index.html" title="Go back to the previous page.">Pharaz Azimi</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="../html/works.html" class="nav-link">Works</a>
                        </li>
                        <li class="nav-item">
                            <a href="../html/exhibitions.html" class="nav-link">Exhibitions</a>
                        </li>
                        <li class="nav-item">
                            <a href="../html/cv.html" class="nav-link">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }
}

customElements.define("navigation-template", NavigationBar);

// Footer 
class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
        <!-- Visible on Medium Sized Devices -->
        <footer class="footer pt-5 pb-3 d-none d-md-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-start">
                        <div class="copyright"></div>
                    </div>
                    <div class="col-md-4 text-center">
                        <a href="https://github.com/StevenGreve" target="_blank" class="admin" title="Get in touch with the creator of the site!">(Site Admin)</a>
                    </div>
                    <div class="col-md-4 text-end">
                        <a href="mailto:faraz.azimi@gmail.com" title="Contact Pharaz via E-Mail!"><i class="far fa-envelope"></i></a>
                        <a href="https://www.instagram.com/pharazazimi" target="_blank" title="Visit Pharaz on Instagram!"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/pharaz.azimi" target="_blank" title="Visit Pharaz on Facebook!"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Visible on Small Devices -->
        <footer class="footer py-4 d-md-none">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <a href="mailto:faraz.azimi@gmail.com"><i class="far fa-envelope"></i></a>
                        <a href="https://www.instagram.com/pharazazimi"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/pharaz.azimi"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-center mt-2">
                        <div class="copyright"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="cold-sm-12 d-flex justify-content-center mt-2">
                        <a href="https://github.com/StevenGreve" class="admin">(Site Admin)</a>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define("footer-template", Footer);
