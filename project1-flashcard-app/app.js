document.addEventListener('DOMContentLoaded', () => {

  // homepage declarations
  const homePage = document.getElementById('homePageContent')

  const createBtn = document.getElementById('createBtn');
  const answerBtn = document.getElementById('answerBtn');

  // create flashcards page declarations
  const createFlashcards = document.getElementById('createFlashcardsContent')
  const createForm = document.getElementById('createForm');

  const addCardBtn = document.getElementById('addCardBtn');
  const saveBtn = document.getElementById('saveBtn');

  // answer flashcards page declarations
  const answerFlashcards = document.getElementById('answerFlashcardsContent')

  // homepage script

  console.log('Home Page Element:', homePage);
  console.log('Create Button Element:', createBtn);

  createBtn.addEventListener('click', () => {    
    homePage.classList.add('hide');
    createFlashcards.style.display = 'flex';
  });

  answerBtn.addEventListener('click', () => {    
    homePage.classList.add('hide');
    answerFlashcards.style.display = 'flex';
    loadFlashcards();
  });


  // Create flashcard script

  // prevent the form from reloading when submit was clicked
  createForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const flashcards = [];

    for (let i = 1; i<=5; i++) {
      const term = document.getElementById('term' + i).value;
      const definition = document.getElementById('definition' + i).value;

      if (term && definition) {
        flashcards.push({
          term: term,
          definition: definition
        })
      }
    }

    const flashcardSet = {
      title: title,
      description: description,
      cards: flashcards
    }

    const flashcardString = JSON.stringify(flashcardSet);
    localStorage.setItem('myFlashcards', flashcardString);

    alert('Flashcards saved successfully!')
    createForm.reset();

    createFlashcards.style.display = 'none';
    homePage.classList.remove('hide');
  });

  // answer flashcards script

  let correctAnswers = 0;

  let currentCardIndex = 0;
  let flashcardData = null;

  const question = document.getElementById('question');
  const correctAnswerBtn = document.getElementById('correctAnswer');
  const wrongAnswerBtn = document.getElementById('wrongAnswer');

  function loadFlashcards() {
    const savedData = localStorage.getItem('myFlashcards');
    flashcardData = JSON.parse(savedData);

    question.textContent = flashcardData.cards[currentCardIndex].definition;
  }

  function nextQuestion() {
    currentCardIndex++;

    if (currentCardIndex < flashcardData.cards.length) {
      question.textContent = flashcardData.cards[currentCardIndex].definition;
    } else {
      question.textContent = `All Done! You got ${correctAnswers} correct answers out of ${flashcardData.cards.length}!`;
      correctAnswerBtn.style.display = 'none';
      wrongAnswerBtn.style.display = 'none';

    }
  }
  
  correctAnswerBtn.addEventListener('click', () => {
    nextQuestion();
    correctAnswers++;
  })

  wrongAnswerBtn.addEventListener('click', () => {
    nextQuestion();
  })
  
});
