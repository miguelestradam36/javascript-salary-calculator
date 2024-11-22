/**
* Template Name: Logis
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
    "use strict";
  
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Initiate Pure Counter
     */
    new PureCounter();
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  
    window.addEventListener("load", initSwiper);
  
    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
  
  })();

  let clockInterval;
  let totalEarnedNormal = 0;
  let totalEarnedX2 = 0;
  let totalEarnedX5 = 0;
  let previousSalary = null;
  let totalSeconds = 0;
  let totalSecondsX2 = 0; 
  let totalSecondsX5 = 0; 

  function calculate() {
    const salary = parseFloat(document.getElementById('salary').value);
    const deductionPercentage = 10.67 / 100 ;
    const period = document.getElementById('period').value;
    const currencySymbol = document.getElementById('currency').value;
    const price = parseFloat(document.getElementById('price').value) || 0;
    const numPeople = parseInt(document.getElementById('people').value) || 0;

    if (isNaN(salary) || salary <= 0) {
      alert("Por favor, ingresa un salario válido.");
      return;
    }

    const netSalary = salary * (1 - deductionPercentage);
    let perPeriod;
    switch (period) {
      case 'weekly':
        perPeriod = netSalary / 4;
        break;
      case 'biweekly':
        perPeriod = netSalary / 2;
        break;
      case 'monthly':
      default:
        perPeriod = netSalary;
        break;
    }

    const hourlyRate = netSalary / (30 * 24);
    const perSecond = hourlyRate / 3600;
    const perMinute = hourlyRate / 60;
    const perDay = hourlyRate * 24;

    const meetingCost = hourlyRate * numPeople; 

    document.getElementById('result').innerHTML = `
              <h3>Resultados:</h3>
              <p>Salario neto: ${currencySymbol}${netSalary.toLocaleString(undefined, {minimumFractionDigits: 2})} (Salario bruto - deducción)</p>
              <p>Por segundo: ${currencySymbol}${perSecond.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
              <p>Por minuto: ${currencySymbol}${perMinute.toLocaleString(undefined , {minimumFractionDigits: 2})}</p>
              <p>Por hora: ${currencySymbol}${hourlyRate.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
              <p>Por día: ${currencySymbol}${perDay.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
              <p>Por mes: ${currencySymbol}${perPeriod.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
          `;

    if (price > 0) {
      const totalHoursToBuy = price / hourlyRate;
      document.getElementById('result').innerHTML += `
                  <p>Esta es la cantidad de horas que te cuesta comprar esto: ${totalHoursToBuy.toFixed(2)} horas.</p>
              `;
    }

    if (numPeople === 0) { 
      document.getElementById('result').innerHTML += `<p>Costo de la reunión: No hay personas en la reunión.</p>`;
    } else {
      document.getElementById('result').innerHTML += `
        <p>Costo de la reunión (1 hora): ${currencySymbol}${meetingCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
      `;
    }

    if (previousSalary !== salary) {
      totalEarnedNormal = 0;
      totalEarnedX2 = 0;
      totalEarnedX5 = 0;
      totalSeconds = 0;
      totalSecondsX2 = 0; 
      totalSecondsX5 = 0; 
      clearInterval(clockInterval);
      startClock(perSecond);
    }

    previousSalary = salary;
  }

  function startClock(rate) {
    const clockElement = document.getElementById('clock');
    const earningsElement = document.getElementById('earnings');

    clockInterval = setInterval(() => {
      totalEarnedNormal += rate;
      totalEarnedX2 += rate * 2;
      totalEarnedX5 += rate * 5;
      totalSeconds += 1;
      totalSecondsX2 += 2; 
      totalSecondsX5 += 5; 

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const hoursX2 = Math.floor(totalSecondsX2 / 3600); 
      const minutesX2 = Math.floor((totalSecondsX2 % 3600) / 60); 
      const secondsX2 = totalSecondsX2 % 60; 

      const hoursX5 = Math.floor(totalSecondsX5 / 3600); 
      const minutesX5 = Math.floor((totalSecondsX5 % 3600) / 60); 
      const secondsX5 = totalSecondsX5 % 60; 

      clockElement.innerHTML = `
                  <span>${hours.toString().padStart(2, '0')}</span>:<span>${minutes.toString().padStart(2, '0')}</span>:<span>${seconds.toString().padStart(2, '0')}</span>
              `;
      earningsElement.innerHTML = `
          Ganancias acumuladas: ${document.getElementById('currency').value}${totalEarnedNormal.toLocaleString(undefined, {minimumFractionDigits: 2})} |
          Ganancias acumuladas (x2): ${document.getElementById('currency').value}${totalEarnedX2.toLocaleString(undefined, {minimumFractionDigits: 2})} | Tiempo (x2): ${hoursX2}h ${minutesX2}m ${secondsX2}s |
          Ganancias acumuladas (x5): ${document.getElementById('currency').value}${totalEarnedX5.toLocaleString(undefined, {minimumFractionDigits: 2})} |
          Tiempo (x5): ${hoursX5}h ${minutesX5}m ${secondsX5}s
      `;
    }, 1000);
  }

  function clearFields() {
    document.getElementById('salary').value = '';
    document.getElementById('price').value = '';
    document.getElementById('people').value = '1'; 
    document.getElementById('result').innerHTML = '';
    document.getElementById('clock').innerHTML = '';
    document.getElementById('earnings').innerHTML = ''; 
    clearInterval(clockInterval);
    totalEarnedNormal = 0;
    totalEarnedX2 = 0;
    totalEarnedX5 = 0;
    previousSalary = null;
    totalSeconds = 0;
    totalSecondsX2 = 0; 
    totalSecondsX5 = 0; 
  }