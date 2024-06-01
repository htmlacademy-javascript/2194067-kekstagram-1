import { container } from './miniatures.js';
import { photos } from './data.js';
import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureElementClose = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const socialComment = bigPictureElement.querySelector('.social__comment');
const socialComments = bigPictureElement.querySelector('.social__comments');
const socialCommentsFragment = document.createDocumentFragment();

container.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }
  const bigPhoto = photos.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId

  );
  showBigPicture(bigPhoto);

});

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPictureValue(data);
  bigPictureValueComments(data.comments);
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  container.removeEventListener('keydown', onPopupEscKeydown);
};

bigPictureElementClose.addEventListener('click', () => {
  closeUserModal();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
});

const bigPictureValue = ({ url, likes, description, comments }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};


const bigPictureValueComments = (data) => {
  data.forEach(({ avatar, name, message }) => {
    const listComments = socialComment.cloneNode(true);

    listComments.querySelector('.social__picture').src = avatar;
    listComments.querySelector('.social__picture').alt = name;
    listComments.querySelector('.social__text').textContent = message;

    socialCommentsFragment.appendChild(listComments);
  });

  socialComments.innerHTML = '';
  socialComments.append(socialCommentsFragment);
};
