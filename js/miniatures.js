import { photos } from './data.js';

const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const pictureUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureElement = photos;

pictureElement.forEach(({ likes, comments, url }) => {
  const pictureUser = pictureUserTemplate.cloneNode(true);
  pictureUser.querySelector('.picture__likes').textContent = likes;
  pictureUser.querySelector('.picture__comments').textContent = comments.length;
  pictureUser.querySelector('.picture__img').src = url;
  fragment.appendChild(pictureUser);
});

container.appendChild(fragment);

export { pictureElement };
