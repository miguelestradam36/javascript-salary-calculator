<?php

?>

<!DOCTYPE html>
<html lang="es" prefix="og: https://valordeltiempo.com/reuniones.php">
<head>
  <meta charset="UTF-8">

  <meta name="google-adsense-account" content="ca-pub-7712765517917992">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>ValordelTiempo - Calculadora de Reuniones</title>
  
  <!-- General Meta Tags -->
  <meta name="title" content="ValordelTiempo - Calculadora de Reuniones">
  <meta name="description" content="Calculadora de Reuniones en base a salario bruto mensual, conoce tu aporte de impuesto a la renta y el seguro social costarricense por mes">
  <meta name="keywords" content="salario neto, salario bruto, costa rica, valor del tiempo, valordeltiempo, salarios costa rica, análisis de salario neto, análisis de salario bruto, impuesto a la renta, impuestos, calculadora de coste de reuniones, coste de reuniones, reuniones y salarios, reuniones costa rica, costa rica, salarios netos costa rica">
  <meta name="image" content="assets/images/favicon.png">
  
  <!-- General Meta Tags - Different Syntax -->
  <meta itemprop="name" content="Calculadora de Reuniones">
  <meta itemprop="description" content="Calculadora de Reuniones en base a salario bruto mensual, conoce tu aporte de impuesto a la renta y el seguro social costarricense por mes">
  <meta itemprop="image" content="assets/images/favicon.png">
  <link rel="canonical" href="https://valordeltiempo.com/reuniones.php" />
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:url" content="https://valordeltiempo.com/reuniones.php">
  <meta property="og:type" content="website">

  <meta property="og:image" content="assets/images/favicon.png">
  <meta property="og:image:secure_url" content="assets/images/favicon.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="300" />
  <meta property="og:image:alt" content="Calculadora de salario neto en base a salario bruto mensual, conoce tu aporte de impuesto a la renta y el seguro social costarricense por mes" />

  <meta property="og:description" content="Calculadora de Reuniones en base a salario bruto mensual, conoce tu aporte de impuesto a la renta y el seguro social costarricense por mes">
  <meta property="og:title" content="Calculadora de Reuniones">
  <meta property="og:site_name" content="Calculadora de Reuniones">
  
  <!-- Twitter/X Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:url" content="https://valordeltiempo.com/reuniones.php">
  <meta name="twitter:title" content="Calculadora de Reuniones">
  <meta name="twitter:description" content="Calculadora de Reuniones en base a salario bruto mensual, conoce tu aporte de impuesto a la renta y el seguro social costarricense por mes">
  <meta name="twitter:image" content="assets/images/favicon.png">

  <!-- Favicons -->
  <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png" />
  <link rel="icon" href="assets/images/favicon.png" type="image/png" />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/css/bootstrap.min.css" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- Google Ads Script -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7712765517917992"
  crossorigin="anonymous"></script>

</head>
<body class="index-page p-1">
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">

            <a aria-label="Link al sitio web valor del tiempo" href="index.php" class="logo d-flex align-items-center me-auto">
            <h1 class="sitename">ValordelTiempo</h1>
            </a>

            <nav id="navmenu" class="navmenu">
            <ul>
                <li><a href="index.php">Inicio<br></a></li>
                <li><a href="reuniones.php" class="active">Inicio<br></a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

        </div>
    </header>
    <main class="main">
        <!-- Form Section -->
        <section id="hero" class="hero section dark-background">

        <img src="assets/images/map.png" alt="Imagen de fondo" class="hero-bg" data-aos="fade-in">

        <div class="container">
            <div class="row gy-4 d-flex justify-content-between">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h2 data-aos="fade-up">¿Sabes cuánto vale una reunión normalmente?</h2>
                    <p data-aos="fade-up" data-aos-delay="100">Descúbrelo con esta herramienta</p>

                    <div class="row">
                        <div class="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <form action="javascript:AddPerson()">
                                <div class="row mb-3">
                                    <div class="alert alert-info" id="miniresultadoingreso">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="form-label" for="salary">Ingresa el nombre del participante:</label>
                                    <input class="form-control" type="text" name="name" id="name" placeholder="Nombre" required/>
                                </div>
                                <div class="row mb-3">
                                    <label class="form-label" for="hours">Ingresa el salario mensual bruto del participante:</label>
                                    <input class="form-control" type="number" name="salary" id="salary" placeholder="300,000.00" min="0" pattern="^(?=.)(\d{1,3}(,\d{3})*)?(\.\d+)?$" required/>
                                </div>
                                <div class="row mb-3">
                                    <button class="btn btn-primary" type="submit">Sumar integrante</button>
                                </div>
                            </form>
                            <br/>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <div class="container">
                    <img src="assets/images/meeting.png" class="img-fluid" alt="Imagen de una reunion">
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section name="meetingsettings" id="meetingsettings">
            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <span>Ajustes de la Reunión</span>
                <h2>Ajustes de la Reunión</h2>
                <p>Elige los integrantes de tu reunión</p>
            </div>
            <!-- End Section Title -->
            <div class="container">
                <div class="row">
                    <section name="peoplenumber" id="peoplenumber"  class="row gy-4">

                    </section>
                    <section name="formsection" id="formsection"  class="row gy-4">

                    </section>
                </div>
            </div>
        </section>
        <section id="result" class="pricing section">

        </section>
    </main>
    <footer id="footer" class="footer dark-background">

        <div class="container footer-top">
            <div class="row gy-4">
            <div class="col-lg-6 col-md-12 footer-about">
                <a aria-label="Link al sitio web valor del tiempo" href="index.php" class="logo d-flex align-items-center">
                <span class="sitename"><i class="bi bi-file-earmark-person"></i> Valor del tiempo</span>
                </a>
                <p>Una herramienta segura, rápida y gratuita. En ‘El Valor Del Tiempo’, tu privacidad es nuestra prioridad. Calcula tu salario neto sin preocuparte por tus datos. Conoce tus ingresos reales en valordeltiempo.com. ¡Inténtalo hoy!</p>
                <hr/>
                <p>En este caso el aporte de impuesto a la renta es definido automáticamente en base al ingreso mensual bruto, esto puesto a que difiere de acuerdo a la cantidad</p>
                <div class="social-links d-flex mt-4">
                <a aria-label="Link al sitio de instagram de valor del tiempo" href="https://www.instagram.com/valortiempo"><i class="bi bi-instagram"></i></a>
                </div>
            </div>


            <div class="col-lg-6 col-md-12 footer-contact text-center text-md-start">
                <h4>Contáctenos</h4>
                <hr/>
                <p>Moravia, San Jose</p>
                <p>Costa Rica</p>
                <p class="mt-4"><strong>Email:</strong> <span>valordeltiempo@gmail.com</span></p>
            </div>

            <div class="col-lg-12 col-md-12 footer-about text-center text-md-start">
                <hr/>
                <p>Transforma tus números en claridad. Usa ‘El Valor Del Tiempo’ para conocer exactamente cuánto ganas después de los rebajos de ley. Una herramienta fácil, rápida y gratuita en valordeltiempo.com. ¡Porque tu tiempo vale oro!</p>
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
            Designed by <a aria-label="Página que tiene diseños de sitios web" href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>

    </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/js/bootstrap.bundle.min.js"></script>

  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- JQuery CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/reuniones.js"></script>
  <script src="assets/js/functions.js"></script>
<script>

</script>

</body>
</html>