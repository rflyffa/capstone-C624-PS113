/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function renderCarousel() {
    const carouselHTML = `
      <!-- Carousel Wrapper -->
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
          <!-- Carousel Inner -->
          <div class="carousel-inner">
              <!-- First Slide -->
              <div class="carousel-item active">
                  <img src="images\\heros\\slider1.jpg" class="d-block w-100" alt="First slide">
                  <div class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                      <h1>Selamat Datang di Jawa Tengah</h1>
                      <p class="mt-3">Destinasi Eksotis dan Pengalaman Tak Terlupakan Menanti Anda</p>
                  </div>
              </div>
              <!-- Second Slide -->
              <div class="carousel-item">
                  <img src="images\\heros\\slider2.jpg" class="d-block w-100" alt="Second slide">
                  <div class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                      <h1>Petualangan Dimulai di Sini</h1>
                      <p class="mt-3">Jelajahi Dunia Baru dan Buat Kenangan Seumur Hidup</p>
                  </div>
              </div>
              <!-- Third Slide -->
              <div class="carousel-item">
                  <img src="images\\heros\\slider3.jpg" class="d-block w-100" alt="Third slide">
                  <div class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                      <h1>Temukan Pesona Tersembunyi</h1>
                      <p class="mt-3">Destinasi Eksotis dan Pengalaman Tak Terlupakan Menanti Anda</p>
                  </div>
              </div>
          </div>
      </div>
  
      <!-- New Section -->
      <section class="cta-section text-center my-5">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6">
                      <img src="images\\heros\\Explorer.png" alt="Explorer" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                      <h2>Jelajahi Jawa Tengah SEKARANG!</h2>
                      <button class="btn btn-primary btn-lg mt-3">AYO!</button>
                  </div>
              </div>
          </div>
      </section>
  
      <section class="stats-section text-center py-5 bg-light">
          <div class="container">
              <h3 class="mb-5">Dengan lebih dari</h3>
              <div class="row">
                  <div class="col-md-4">
                      <h4>10.000+<br><small>hotel & resort</small></h4>
                  </div>
                  <div class="col-md-4">
                      <h4>3000+<br><small>restaurant</small></h4>
                  </div>
                  <div class="col-md-4">
                      <h4>2000+<br><small>Tempat wisata</small></h4>
                  </div>
              </div>
          </div>
      </section>
  
      <!-- How to Use Section -->
      <section class="how-to-use-section text-center my-5">
          <div class="container">
              <h2 class="mb-5">Destinasi</h2>
              <div class="row align-items-center">
                  <div class="col-md-4">
                      <img src="images\\heros\\image1.png" alt="Step 1" class="img-fluid">
                      <h4 class="mt-3">01</h4>
                      <p>Tentukan durasi liburan.</p>
                  </div>
                  <div class="col-md-4">
                      <img src="images\\heros\\image2.png" alt="Step 2" class="img-fluid">
                      <h4 class="mt-3">02</h4>
                      <p>Tentukan jumlah orang yang kamu ajak.</p>
                  </div>
                  <div class="col-md-4">
                      <img src="images\\heros\\image3.png" alt="Step 3" class="img-fluid">
                      <h4 class="mt-3">03</h4>
                      <p>Tentukan estimasi budget kamu.</p>
                  </div>
              </div>
          </div>
      </section>
  
      <!-- Simple Planning Section -->
      <section class="simple-planning-section text-center my-5">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6">
                      <img src="images\\heros\\Simple Planning.png" alt="Simple Planning" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                      <h2 class="mt-3">Jadi Gaperlu Bingung Rencanain Liburan Kamu.</h2>
                  </div>
              </div>
          </div>
      </section>
    `;

    return carouselHTML;
  }

  export default renderCarousel;