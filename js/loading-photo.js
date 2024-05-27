const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const avatarInputElement = document.querySelector('.ad-form-header__input');
const avatarImageElement = document.querySelector('.ad-form-header__preview');
const propertyPhotoInputElement = document.querySelector('.ad-form__input');
const propertyPhotoPreviewElement = document.querySelector('.ad-form__photo');

propertyPhotoPreviewElement.style.overflow = 'hidden';

const loadAndDisplayImage = (inputElement, previewElement) => {
  const selectedFile = inputElement.files[0];
  const fileName = selectedFile.name.toLowerCase();
  const match = FILE_TYPES.some((extension) => fileName.endsWith(extension));

  previewElement.src = '';

  if (match) {
    previewElement.src = URL.createObjectURL(selectedFile);
  }
};

const createPhotoContainer = () => {
  const photoContainer = document.createElement('img');
  photoContainer.style.width = '100%';
  photoContainer.style.height = 'auto';
  photoContainer.src = '';
  photoContainer.alt = 'Фотография жилья';
  propertyPhotoPreviewElement.appendChild(photoContainer);

  loadAndDisplayImage(propertyPhotoInputElement, photoContainer);
};

const setupImageUploadListeners = () => {
  avatarInputElement.addEventListener('change', () => {
    loadAndDisplayImage(avatarInputElement, avatarImageElement);
  });

  propertyPhotoInputElement.addEventListener('change', createPhotoContainer);
};

export { setupImageUploadListeners };
