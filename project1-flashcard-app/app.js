document.addEventListener('DOMContentLoaded', () => {

  // homepage
  const homePage = document.getElementById('homePageContent')

  const createBtn = document.getElementById('createBtn');
  const answerBtn = document.getElementById('answerBtn');

  // create flashcards page
  const createFlashcards = document.getElementById('createFlashcardsContent')
  const createForm = document.getElementById('createForm');         
  const addCardBtn = document.getElementById('addCardBtn');
  const saveBtn = document.getElementById('saveBtn');
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

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

  // prevent the form from reloading when submit was clicked
  createForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

  })

  saveBtn.addEventListener('click', () => {
    createFlashcards.style.display = 'none';
    homePage.classList.remove('hide');
  })
});
