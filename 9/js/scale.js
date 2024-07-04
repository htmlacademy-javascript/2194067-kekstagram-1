const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview');

let scale = parseInt(scaleValue.value, 10);

const scaleImage = (scale) => {
  imgElement.style.transform = `scale(${scale / 100})`;
  scaleValue.value = scale + '%';
};

smaller.addEventListener('click',  (evt) => {
  scale -= SCALE_STEP;
 if (scale < SCALE_MIN) {
  scale = SCALE_MIN;
}
scaleImage(scale);
});

 bigger.addEventListener('click', (evt) => {
  scale += SCALE_STEP;
  if (scale > SCALE_MAX) {
   scale = SCALE_MAX;
  }
  scaleImage(scale);
 });

 const resetScale = () => scaleImage(SCALE_DEFAULT);

 export { resetScale };
