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

function openModal(modal){
  modal.classList.add("modal__is-opened");
}

function closeModal(modal){
  modal.classList.remove("modal__is-opened");
}

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
  console.log(linkInput.value);
  console.log(cardNameInput.value);
  closeModal(newPostModal);
};

addCardForm.addEventListener("submit", handleAddCardSubmit);
