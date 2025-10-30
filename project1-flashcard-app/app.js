document.addEventListener('DOMContentLoaded', () => {

  // homepage
  const homePage = document.getElementById('homePageContent')

  const createBtn = document.getElementById('createBtn');
  const answerBtn = document.getElementById('answerBtn');

  // create flashcards page
  const createFlashcards = document.getElementById('createFlashcardsContent')
  const addCardBtn = document.getElementById('addCardBtn');
  const saveBtn = document.getElementById('saveBtn');

  console.log('Home Page Element:', homePage);
  console.log('Create Button Element:', createBtn);

  createBtn.addEventListener('click', () => {    
      homePage.classList.add('hide');
      createFlashcards.style.display = 'flex';
  });

  answerBtn.addEventListener('click', () => {    
      homePage.classList.add('hide');
      createFlashcards.style.display = 'flex';
  });

  saveBtn.addEventListener('click', () => {
    createFlashcards.style.display = 'none';
    homePage.classList.remove('hide');
  })
});
