$(document).ready(function() {
  var $lg = $('#lightgallery');

  $('.masonary__content__image').on('click', function() {
    var src = $(this).attr('src');
    var imgIndex = parseInt(src.slice(src.lastIndexOf('/') + 1, src.indexOf('.jpg')));
    --imgIndex;
    console.log(imgIndex);

    var lgInstance = $lg.lightGallery({
      dynamic: true,
      download: false,
      dynamicEl: [
        {
          "src": "../img/fusion/1.jpg",
          "thumb": "../img/fusion/thumb-1.jpg"
        },
        {
          "src": "../img/fusion/2.jpg",
          "thumb": "../img/fusion/thumb-2.jpg"
        },
        {
          "src": "../img/fusion/3.jpg",
          "thumb": "../img/fusion/thumb-3.jpg"
        },
        {
          "src": "../img/fusion/4.jpg",
          "thumb": "../img/fusion/thumb-4.jpg"
        },
        {
          "src": "../img/fusion/5.jpg",
          "thumb": "../img/fusion/thumb-5.jpg"
        },
        {
          "src": "../img/fusion/6.jpg",
          "thumb": "../img/fusion/thumb-6.jpg"
        },
        {
          "src": "../img/fusion/7.jpg",
          "thumb": "../img/fusion/thumb-7.jpg"
        },
        {
          "src": "../img/fusion/8.jpg",
          "thumb": "../img/fusion/thumb-8.jpg"
        },
        {
          "src": "../img/fusion/9.jpg",
          "thumb": "../img/fusion/thumb-9.jpg"
        },
        {
          "src": "../img/fusion/10.jpg",
          "thumb": "../img/fusion/thumb-10.jpg"
        },
        {
          "src": "../img/fusion/11.jpg",
          "thumb": "../img/fusion/thumb-11.jpg"
        },
        {
          "src": "../img/fusion/12.jpg",
          "thumb": "../img/fusion/thumb-12.jpg"
        },
        {
          "src": "../img/fusion/13.jpg",
          "thumb": "../img/fusion/thumb-13.jpg"
        },
        {
          "src": "../img/fusion/14.jpg",
          "thumb": "../img/fusion/thumb-14.jpg"
        },
      ]
    });

    lgInstance.data('lightGallery').index = imgIndex;
  });
});
