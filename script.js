// Retreive DOM elements
const container = document.querySelector('.container')
const day = document.querySelector('.row .day')
const title = document.getElementById('title')
const count = document.getElementById('count')
const total = document.getElementById('total')

// Load local storage

// Update final score
function updateSelectedCount() {

}

// Save user title
function SaveTitle() {
  localStorage.setItem(title, title.value)
}

// Cycle on click event
container.addEventListener('click', (e) =>{
  if (
    e.target.classList.contains('nullCredit')
    ) {
      e.target.classList.remove('nullCredit')
      e.target.classList.add('fullCredit')
      console.log('has changed from null > full')
      updateSelectedCount();
    } else if (e.target.classList.contains('fullCredit')) {
      e.target.classList.remove('fullCredit')
      e.target.classList.add('halfCredit')
      console.log('has changed from full > half')
      updateSelectedCount();
    } else if (e.target.classList.contains('halfCredit')) {
      e.target.classList.remove('halfCredit')
      e.target.classList.add('noCredit')
      console.log('has changed from half > no')
      updateSelectedCount();
    } else {
      e.target.classList.remove('noCredit')
      e.target.classList.add('nullCredit')
      console.log('has changed from no > null')
      updateSelectedCount();
    }
})

// Run on launch
  // Load Title Data 
  // Load Day Data
  // 