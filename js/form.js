import { isEscapeKey } from './util.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хэштеги';

const form = document.querySelector('.img-upload__form');
const formEdit = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const body = document.querySelector('body');
const uploadCancel = form.querySelector('.img-upload__cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const hideModal = () => {
  form.reset();
  pristine.reset();
  formEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  };
}

uploadCancel.addEventListener('click', () => {
  hideModal();
});

const showModal = () => {
  formEdit.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onFileInputChange = () => {
  showModal();
};

uploadFile.addEventListener('change', onFileInputChange);

const onStopCloseField = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  };
};

hashtagField.addEventListener('keydown', onStopCloseField);
commentField.addEventListener('keydown', onStopCloseField);

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);
