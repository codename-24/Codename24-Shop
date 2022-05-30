const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);

//productlisst

$('.view-more-btn').on('click', function() {
  var thisParentInit = $(this).parent('.item-wrapper');
  var thisParent = thisParentInit.parent('.item');
  var thisSymbol = $(this).find('.view-symbol');
  if (thisParent.hasClass('active') == false) {
    thisParent.addClass('active');
    $(this).text('VIEW LESS -');
  } else if (thisParent.hasClass('active') == true) {
    thisParent.removeClass('active');
    $(this).text('VIEW MORE +');
  }
});

$('.delivery-radio-text').on('click', function() {
  var thisParent = $(this).parent('.delivery-container');
  var theseRadios = thisParent.find('.delivery-radio');
  theseRadios.prop('checked', false);
  var thisRadio = $(this).prev('.delivery-radio');
  
  if (thisRadio.prop('checked') == false) {
    //thisRadio.prop('checked', true);
    thisRadio.trigger('click');
    thisRadio.trigger('change');
  } else if (thisRadio.prop('checked') == true) {
    //thisRadio.prop('checked', false);
    thisRadio.trigger('click');
    thisRadio.trigger('change');
  }
});

$('.thumb-link').on('click', function(e) {
  e.preventDefault();
});

$('.delivery-radio').on('change', function() {
  var thisParentA = $(this).parent('.delivery-container');
  var thisParentB = thisParentA.parent('.details-content-wrapper');
  var thisParentC = thisParentB.parent('.item-details-container');
  var thisParentD = thisParentC.parent('.item-wrapper');
  var thisParentE = thisParentD.parent('.item');
  var thisDiamondContent = thisParentE.find('.diamond-content');
  var priceInitA = thisDiamondContent.text();
  var priceSplit = priceInitA.split('$');
  var priceInit = parseInt(priceSplit[1]);
  var deliveryFee = 50;
  var priceEst = parseInt(priceInit + deliveryFee);
  var priceOutput = '$'+priceEst;
  console.log(priceEst);
  
  var deliveryRadio = thisParentA.find('.delivery-radio[title="delivery"]');
  
  if (deliveryRadio.prop('checked') == false) {
    $('.price-text').text(priceInitA);
  } else if (deliveryRadio.prop('checked') == true) {
  $('.price-text').text(priceOutput);
  }
});
///
