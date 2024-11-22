<?php

?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de Salario</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/css/bootstrap.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">
</head>
<body>
  <main>
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <img src="assets/images/map.png" alt="" class="hero-bg" data-aos="fade-in">

      <div class="container">
        <div class="row gy-4 d-flex justify-content-between">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
            <p data-aos="fade-up" data-aos-delay="100">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>

            <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
              <input type="text" class="form-control" placeholder="Your ZIP code or City. e.g. New York">
              <button type="submit" class="btn btn-primary">Search</button>
            </form>

            <div class="row gy-4" data-aos="fade-up" data-aos-delay="300">

              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
                  <p>Per second</p>
                </div>
              </div><!-- End Stats Item -->

              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">521</span>
                  <p>Per minute</p>
                </div>
              </div><!-- End Stats Item -->

              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" class="purecounter">1453</span>
                  <p>Per hour</p>
                </div>
              </div><!-- End Stats Item -->

              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter">32</span>
                  <p>Per day</p>
                </div>
              </div><!-- End Stats Item -->

            </div>

          </div>

          <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/images/hero.png" class="img-fluid mb-3 mb-lg-0" alt="">
          </div>

        </div>
      </div>

    </section><!-- /Hero Section -->

    <section>
      <div class="container">
      <h1>Calculadora de Salario</h1>

      <label for="currency">Selecciona la moneda:</label>
      <select id="currency">
        <option value="₡">Colón Costarricense</option>
        <option value="$">Dólar Estadounidense</option>
        <option value="€">Euro</option>
        <option value="£">Libra Esterlina</option>
        <option value="¥">Yen Japonés</option>
        <option value="₹">Rupia India</option>
        <option value="₩">Won Surcoreano</option>
        <option value="₺">Lira Turca</option>
        <option value="₽">Rublo Ruso</option>
        <option value="A$">Dólar Australiano</option>
        <option value="C$">Dólar Canadiense</option>
        <option value="NZ$">Dólar Neozelandés</option>
        <option value="S$">Dólar de Singapur</option>
        <option value="R$">Real Brasileño</option>
        <option value="₴">Grivna Ucraniana</option>
        <option value="₱">Peso Filipino</option>
        <option value="₫">Dong Vietnamita</option>
        <option value="₭">Kip Laociano</option>
        <option value="₮">Tugrik Mongol</option>
        <option value="B$">Dólar de Barbados</option>
        <option value="Kč">Corona Checa</option>
        <option value="kr">Corona Sueca</option>
        <option value="kr">Corona Danesa</option>
        <option value="R">Rand Sudafricano</option>
        <option value="CHF">Franco Suizo</option>
        <option value="د.إ">Dirham de los Emiratos Árabes Unidos</option>
        <option value="ل.س">Libra Siria</option>
        <option value="د.ك">Dinar Kuwaití</option>
        <option value="BHD">Dinar Bahreiní</option>
        <option value="J د.">Dinar Jordano</option>
        <option value="MOP$">Pataca Macanesa</option>
        <option value="₦">Naira Nigeriana</option>
        <option value="₵">Cedi Ghanés</option>
        <option value="₲">Guaraní Paraguayo</option>
        <option value="₴">Grivna Ucraniana</option>
      </select>

      <label for="salary">Ingresa tu salario bruto mensual:</label>
      <input type="number" id="salary" placeholder="Salario mensual" min="0" />

      <label for="period">Selecciona el periodo:</label>
      <select id="period">
        <option value="monthly">Mensual</option>
        <option value="weekly">Semanal</option>
        <option value="biweekly">Quincenal</option>
      </select>

      <label for="price">Precio de lo que quieres comprar:</label>
      <input type="number" id="price" placeholder="Precio del artículo" min="0" />

      <label for="people">Número de personas en la reunión:</label>
      <input type="number" id="people" placeholder="Número de personas" value="1" /> 

      <button onclick="calculate()">Calcular</button>
      <button onclick="clearFields()">Limpiar</button>

      <div class="result" id="result"></div>

      <div class="clock-container">
        <div class="clock" id="clock"></div>
        <div class="earnings" id="earnings"></div>
      </div>
    </div>
    </section>
  </main>

  <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Logis</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Logis</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>
</body>
</html>