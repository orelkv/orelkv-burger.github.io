; (function () {
  const commentsContainer = $('.comments');
  const commentsBtn = commentsContainer.find('.btn');
  const commentsClose = commentsContainer.find('.close__comments')
  const commentsOverlayTitle = commentsContainer.find('.comments__overlay-title');
  const commentsOverlayText = commentsContainer.find('.comments__overlay-text');
  const commentsOverlay = commentsContainer.find('.comments__overlay');


  $(commentsBtn).on('click', function () {
    const $this = $(this);
    const commetsItem = $this.closest('.comments__article');    
    const commentsTitleText = commetsItem.find('h4').text();
    const commentsTextContent = commetsItem.find('p').text();

    commentsOverlay.addClass('comments__overlay_open');
    commentsOverlayTitle.text(commentsTitleText);
    commentsOverlayText.text(commentsTextContent);
  })

  $(commentsClose).on('click', function () {
    commentsOverlay.removeClass('comments__overlay_open');
  })
})()