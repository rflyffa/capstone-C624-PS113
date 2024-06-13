/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function renderNavbar() {
  const navbarHTML = `
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand fs-4" href="index.html"><img src="images\\heros\\logo.png" alt="JAVENTURE Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">JAVENTURE</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active no-hover" href="#" id="destinasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Destinasi <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="destinasiDropdown">
                                <li><a class="dropdown-item" href="">Destinasi 1</a></li>
                                <li><a class="dropdown-item" href="src/scripts/destination2.js">Destinasi 2</a></li>
                                <li><a class="dropdown-item" href="src/scripts/destination3.js">Destinasi 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
  `;

  return navbarHTML;
}

export default renderNavbar;
