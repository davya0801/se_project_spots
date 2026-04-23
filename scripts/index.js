const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
    name: "Restaurant terrace",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name:"An outdoor cafe",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name: "Tunnel with morning light",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },
  {
    name: "Mountain house",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  }
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__new-post");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const addCardForm = newPostModal.querySelector(".modal__form");
const linkInput = newPostModal.querySelector("#image-link-input");
const cardNameInput = newPostModal.querySelector("#profile-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileBioEl = document.querySelector(".profile__bio");

const cardTemplate = document.querySelector("#card__template");
const cardList = document.querySelector(".cards__list");

const modalPreview = document.querySelector("#preview-modal");
const previewCloseBtn = modalPreview.querySelector(".modal__close-btn");
const previewImageEl = modalPreview.querySelector(".modal__image");
const previewCaption = modalPreview.querySelector(".modal__caption");

function getCardElement(data){
  const cardElement = cardTemplate.content
  .querySelector(".card")
  .cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeEl = cardElement.querySelector(".card__heart-btn");

  cardLikeEl.addEventListener("click", () => {
    cardLikeEl.classList.toggle("card__heart-btn_clicked");
  });

  const cardDeleteEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteEl.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardImageEl.addEventListener("click", () => {
  previewImageEl.src = data.link;
  previewImageEl.alt = data.name;
  previewCaption.textContent = data.name;
  openModal(modalPreview);
  });

  return cardElement;
}

function openModal(modal){
  modal.classList.add("modal_is-opened");
}

function closeModal(modal){
  modal.classList.remove("modal_is-opened");
}

previewCloseBtn.addEventListener("click", function (){
  closeModal(modalPreview)
});

editProfileBtn.addEventListener("click", function (){
  openModal(editProfileModal);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileBioEl.textContent;
});


editProfileCloseBtn.addEventListener("click", function(){
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function(){
 openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function(){
  closeModal(newPostModal);
});

function handleEditProfileSumbit(evt){
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileBioEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
};

editProfileForm.addEventListener("submit", handleEditProfileSumbit);

function handleAddCardSubmit(evt){
  evt.preventDefault();

  const inputValues = {
    name: cardNameInput.value,
    link: linkInput.value,
  }

  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);
  closeModal(newPostModal);
};

addCardForm.addEventListener("submit", handleAddCardSubmit);



initialCards.forEach(function (item) {
 const cardElement = getCardElement(item);
 cardList.append(cardElement);

});