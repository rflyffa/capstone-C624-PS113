/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function renderFooter() {
  const footerHTML = `
    <!--Footer-->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <!-- About Section -->
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p>We are committed to providing complete and accurate information to local and international tourists about tourist destinations, culture, culinary experiences, and various interesting activities that can be enjoyed in Central Java</p>
                </div>
                <!-- Quick Links -->
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Services</a></li>
                    </ul>
                </div>
                <!-- Contact Info -->
                <div class="col-md-4">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-map-marker-alt"></i> 123 Street, Jawa Tengah, Indonesia</li>
                        <li><i class="fas fa-phone"></i> +123 456 7890</li>
                        <li><i class="fas fa-envelope"></i> info@example.com</li>
                    </ul>
                    <!-- Social Icons -->
                    <div class="social-icon">
                        <a href="https://www.instagram.com/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.instagram.com/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>&copy; 2024. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  `;

  return footerHTML;
}

export default renderFooter;
