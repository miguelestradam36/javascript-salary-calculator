<?php

?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de Salario Neto</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  
  <meta name="description" content="Calculadora de salario neto en base a salario bruto mensual">
  <meta name="keywords" content="salario neto, salario bruto, costa rica">

  <meta itemprop="name" content="Calculadora de Salario Neto">
  <meta itemprop="description" content="Calculadora de salario neto en base a salario bruto mensual">
  <meta itemprop="image" content="assets/img/favicon.png">
  <link rel="canonical" href="https://salarycalculator.wuaze.com" />

  <meta property="og:url" content="https://salarycalculator.wuaze.com">
  <meta property="og:image" content="assets/img/favicon.png">
  <meta property="og:description" content="Calculadora de salario neto en base a salario bruto mensual">
  <meta property="og:title" content="Calculadora de Salario Neto">
  <meta property="og:site_name" content="Calculadora de Salario Neto">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:url" content="https://salarycalculator.wuaze.com">
  <meta name="twitter:title" content="Calculadora de Salario Neto">
  <meta name="twitter:description" content="Calculadora de salario neto en base a salario bruto mensual">
  <meta name="twitter:image" content="assets/img/favicon.png">


  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

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

            <h2 data-aos="fade-up">Análisis de salario</h2>
            <p data-aos="fade-up" data-aos-delay="100">Esta calculadora va a mostrar el ingreso neto de un empleado en base a su salario bruto mensual</p>
            <div class="row mb-3">
              <label class="form-label" for="salary">Ingresa tu salario bruto mensual:</label>
              <input class="form-control" type="number" id="salary" placeholder="Salario mensual" min="0" />
            </div>
            <div class="row mb-3">
              <label class="form-label" for="price">Precio de lo que quieres comprar:</label>
              <input class="form-control" type="number" id="price" placeholder="Precio del artículo" min="0" />
            </div>
            <div class="row mb-3">
              <label class="form-label" for="people">Número de personas en reunión planificada:</label>
              <input class="form-control" type="number" id="people" placeholder="Número de personas" value="1" /> 
            </div>
            <div class="row mb-3">
              <button class="btn btn-primary" onclick="calculate()">Calcular</button>
            </div>
          </div>
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <div class="container">
              <img src="assets/images/dollar.png" class="img-fluid" alt="...">
            </div>
          </div>
        </div>
      </div>
      <div id="result" class="row gy-4">
        <br/>
        <section id="alt-pricing" class="alt-pricing section">
          <div class="container section-title" data-aos="fade-up">
            <span>Impuestos</span>
            <h2 class="title">Impuestos</h2>
            <p class="description">Resultados en base a la cantidad introducida</p>
          </div><!-- End Section Title -->
          <div class="container">
            <div class="row gy-4 pricing-item featured mt-4" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h3>Aporte Seguro Social</h3>
              </div>
              <div class="col-lg-6 d-flex align-items-center justify-content-center">
                <h4><sup id="ccss"></sup><span> / mes</span></h4>
              </div>
              <div class="col-lg-2 d-flex align-items-center justify-content-center">
                <a><img class="img-fluid" src="assets/images/ccss.png" /></a>
              </div>
            </div><!-- End Pricing Item -->
            <div class="row gy-4 pricing-item" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h3>Aporte de Impuesto a la Renta</h3>
              </div>
              <div class="col-lg-6 d-flex align-items-center justify-content-center">
                <h4><sup id="renta"></sup><span> / mes</span></h4>
              </div>
              <div class="col-lg-2 d-flex align-items-center justify-content-center">
                <a><img class="img-fluid" src="assets/images/hacienda.svg" /></a>
              </div>
            </div><!-- End Pricing Item -->
          </div>
        </section>

        <div class="container section-title" data-aos="fade-up">
          <span>Análisis sobre ingresos</span>
          <h2 class="title">Análisis sobre ingresos</h2>
          <p class="description">Resultados en base a la cantidad introducida</p>
        </div><!-- End Section Title -->

        <div class="col-lg-3 col-6">
          <div id="seconds" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter"></span>
            <p>Por segundo</p>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-6">
          <div id="minutes" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter"></span>
            <p>Por minuto</p>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-6">
          <div id="hours" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" class="purecounter"></span>
            <p>Por hora</p>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-6">
          <div id="days" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter"></span>
            <p>Por día</p>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-6">
          <div id="months" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter"></span>
            <p>Por mes</p>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-6">
          <div id="article" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter"></span>
            <p>Horas necesarias para comprar el articulo</p>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-6">
          <div id="meeting" class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter"></span>
            <p class="people">Fondos necesarios para reunión de una hora</p>
          </div>
        </div><!-- End Stats Item -->
        <section id="alt-pricing" class="alt-pricing section">
          <div class="container">

            <div class="row gy-4 pricing-item featured mt-4" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h3 id="clock"></h3>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h4 id="earnings"></h4>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <ul>
                  <li><i class="bi bi-check"></i> <span>Ganancias a tiempo real</span></li>
                </ul>
              </div>
            </div><!-- End Pricing Item -->

            <div class="row gy-4 pricing-item" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h3 id="clock2"></h3>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h4 id="earnings2"><sup></h4>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <ul>
                  <li><i class="bi bi-check"></i> <span>A dos veces el tiempo real</span></li>
                </ul>
              </div>
            </div><!-- End Pricing Item -->

            <div class="row pricing-item featured" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h3 id="clock3"></h3>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <h4 id="earnings3"></h4>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <ul>
                  <li><i class="bi bi-check"></i> <span>A cinco veces el tiempo real</span></li>
                </ul>
              </div>
            </div><!-- End Pricing Item -->
            
          </div>
        </section>

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

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>
<script>

</script>

</body>
</html>