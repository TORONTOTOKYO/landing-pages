new WOW().init();
$(document).ready(function () {
  $('.grid').masonry({
    gutter: 30,
    itemSelector: '.grid__item',
    columnWidth: 262
  });
  $('.header__hamburger').click(function () {
    $('.header__mobile-nav').toggle(300);
    $(this).toggleClass('header__hamburger_active');
  });
  $('.index-portfolio__category-link').click(function (event) {
    event.preventDefault();
    $('.index-portfolio__category-link').removeClass('index-portfolio__category-link_active');
    $(this).addClass('index-portfolio__category-link_active');
    var selectedGroup = $(this).data().group;
    var imgs = $('.index-portfolio__img-block');
    imgs.show();
    imgs.each(function () {
      if (!$(this).data().group.includes(selectedGroup)) $(this).hide();
    });
    $('.grid').masonry('layout');
  });
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $('.widget-posts__nav-item').click(function (event) {
    event.preventDefault();
    if ($(this).attr('class').includes('widget-posts__nav-item_active')) return;
    $('.widget-posts__nav-item').removeClass('widget-posts__nav-item_active');
    $(this).addClass('widget-posts__nav-item_active');
    var selectedGroup = $(this).data().group;
    $('.widget-posts__group').hide(500);
    $('.widget-posts__group').each(function () {
      if ($(this).data().group.includes(selectedGroup)) $(this).show(500);
    });
  });
  $('.input-block .input').focus(function () {
    $(this).siblings('.input-block__placeholder').addClass('input-block__placeholder_active');
  });
  $('.input-block__placeholder').click(function () {
    $(this).addClass('input-block__placeholder_active');
    $(this).siblings('.input').focus();
  });
  $('.input-block .input').focusout(function () {
    if ($(this).val()) return;
    $(this).siblings('.input-block__placeholder').removeClass('input-block__placeholder_active');
  });
});
//# sourceMappingURL=main.js.map
