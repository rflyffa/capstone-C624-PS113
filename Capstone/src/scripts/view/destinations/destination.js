/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function renderDestination() {
  const destinationHTML = `
    <div class="container my-5">
      <h2 class="text-center mb-4">Pilih Destinasi Liburan Anda</h2>
      <div class="row">
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/rumah-lumbung.jpg" class="card-img-top" alt="Rumah Lumbung Bedugul">
            <div class="card-body">
              <h5 class="card-title">Rumah Lumbung Bedugul</h5>
              <p class="card-text">Rp.300.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/kebun-raya.jpg" class="card-img-top" alt="Kebun Raya Bedugul">
            <div class="card-body">
              <h5 class="card-title">Kebun Raya Bedugul</h5>
              <p class="card-text">Rp.30.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/watung-rekreasi.jpg" class="card-img-top" alt="Watung Rekreasi Batur">
            <div class="card-body">
              <h5 class="card-title">Watung Rekreasi Batur</h5>
              <p class="card-text">Rp.200.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/danau-beratan.jpg" class="card-img-top" alt="Danau Beratan">
            <div class="card-body">
              <h5 class="card-title">Danau Beratan</h5>
              <p class="card-text">Rp.30.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/wanung-damus.jpg" class="card-img-top" alt="Wanung Damus Beratan">
            <div class="card-body">
              <h5 class="card-title">Wanung Damus Beratan</h5>
              <p class="card-text">Rp.100.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/camping-sari.jpg" class="card-img-top" alt="Camping Sari Hotel">
            <div class="card-body">
              <h5 class="card-title">Camping Sari Hotel</h5>
              <p class="card-text">Rp.200.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/monkey-forest.jpg" class="card-img-top" alt="Monkey Forest">
            <div class="card-body>
              <h5 class="card-title">Monkey Forest</h5>
              <p class="card-text">Rp.60.000 - Rp.250.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/istana-kerung.jpg" class="card-img-top" alt="Istana Kerung Ubud">
            <div class="card-body">
              <h5 class="card-title">Istana Kerung Ubud</h5>
              <p class="card-text">Rp.32.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/goa-gajah.jpg" class="card-img-top" alt="Goa Gajah">
            <div class="card-body">
              <h5 class="card-title">Goa Gajah</h5>
              <p class="card-text">Rp.30.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/bebek-saring.jpg" class="card-img-top" alt="Bebek Saring Saring">
            <div class="card-body">
              <h5 class="card-title">Bebek Saring Saring</h5>
              <p class="card-text">Rp.100.000 - Rp.200.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/grand-wisya.jpg" class="card-img-top" alt="Grand Wisya">
            <div class="card-body">
              <h5 class="card-title">Grand Wisya</h5>
              <p class="card-text">-</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/puncak-wanagiri.jpg" class="card-img-top" alt="Puncak Wanagiri">
            <div class="card-body">
              <h5 class="card-title">Puncak Wanagiri</h5>
              <p class="card-text">-</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/alam-sambangan.jpg" class="card-img-top" alt="Alam Sambangan">
            <div class="card-body">
              <h5 class="card-title">Alam Sambangan</h5>
              <p class="card-text">-</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/airtejeun.jpg" class="card-img-top" alt="Air Terjun Giligit">
            <div class="card-body">
              <h5 class="card-title">Air Terjun Giligit</h5>
              <p class="card-text">-</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="images/destinations/wanung-bambu.jpg" class="card-img-top" alt="Wanung Bambu">
            <div class="card-body">
              <h5 class="card-title">Wanung Bambu</h5>
              <p class="card-text">-</p>
            </div>`;

    return destinationlHTML;
  }

  export default renderDestination;