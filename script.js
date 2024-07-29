document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dictionaryDiv = document.getElementById('dictionary');
  const modal = document.getElementById('modal');
  const modalSantali = document.getElementById('modalSantali');
  const modalEnglish = document.getElementById('modalEnglish');
  const closeModal = document.getElementsByClassName('close')[0];
  
  let dictionaryData = [];

  fetch('https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/sat-en.json') // Update with your raw JSON URL
    .then(response => response.json())
    .then(data => {
      dictionaryData = data;
      displayDictionary();
    })
    .catch(error => console.error('Error fetching the dictionary data:', error));

  function displayDictionary() {
    // *** Shuffle the dictionaryData ***
    shuffleArray(dictionaryData); // <--- New line to shuffle data
    const wordLimit = getWordLimit();
    const displayData = dictionaryData.slice(0, wordLimit);
    dictionaryDiv.innerHTML = '';
    displayData.forEach(entry => {
      const entryDiv = document.createElement('div');
      entryDiv.classList.add('entry');
      entryDiv.dataset.santali = entry.santali;
      entryDiv.dataset.english = entry.english;

      const santaliDiv = document.createElement('div');
      santaliDiv.classList.add('santali');
      santaliDiv.textContent = entry.santali;

      const englishDiv = document.createElement('div');
      englishDiv.classList.add('english');
      englishDiv.textContent = entry.english;

      entryDiv.appendChild(santaliDiv);
      entryDiv.appendChild(englishDiv);
      dictionaryDiv.appendChild(entryDiv);

      entryDiv.addEventListener('click', () => {
        modalSantali.textContent = entry.santali;
        modalEnglish.textContent = entry.english;
        modal.style.display = 'block';
      });
    });
  }

  // *** New function to shuffle an array ***
  function shuffleArray(array) { // <--- New function to shuffle the array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getWordLimit() {
    const screenHeight = window.innerHeight;
    const entryHeight = 80; // Approximate height of each entry in pixels
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const availableHeight = screenHeight - headerHeight - footerHeight;
    return Math.floor(availableHeight / entryHeight);
  }

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const wordLimit = getWordLimit();
    const filteredDictionary = dictionaryData.filter(entry =>
      entry.santali.toLowerCase().includes(query) || entry.english.toLowerCase().includes(query)
    ).slice(0, wordLimit);
    if (filteredDictionary.length === 0) {
      showNoResultsMessage();
    } else {
      displayFilteredDictionary(filteredDictionary);
    }
  });

  function displayFilteredDictionary(filteredDictionary) {
    dictionaryDiv.innerHTML = '';
    filteredDictionary.forEach(entry => {
      const entryDiv = document.createElement('div');
      entryDiv.classList.add('entry');
      entryDiv.dataset.santali = entry.santali;
      entryDiv.dataset.english = entry.english;

      const santaliDiv = document.createElement('div');
      santaliDiv.classList.add('santali');
      santaliDiv.textContent = entry.santali;

      const englishDiv = document.createElement('div');
      englishDiv.classList.add('english');
      englishDiv.textContent = entry.english;

      entryDiv.appendChild(santaliDiv);
      entryDiv.appendChild(englishDiv);
      dictionaryDiv.appendChild(entryDiv);

      entryDiv.addEventListener('click', () => {
        modalSantali.textContent = entry.santali;
        modalEnglish.textContent = entry.english;
        modal.style.display = 'block';
      });
    });
  }

  function showNoResultsMessage() {
    dictionaryDiv.innerHTML = `
      <div class="no-results">
      <h1>ᱦᱮᱴᱨᱮᱻ...</h1> </br>
        <span class="highlighted-text">ᱱᱚᱶᱟ ᱟᱹᱲᱟᱹ</span> ᱫᱚ <span class="highlighted-text">ᱟᱹᱲᱟᱹ ᱠᱷᱟᱫᱟᱱᱨᱮ ᱵᱟᱹᱱᱩᱜᱼᱟ</span> ᱾ ᱚᱱᱟᱛᱮ <span class="highlighted-text">ᱤᱠᱟᱹᱧ ᱠᱷᱚᱡᱚᱜ ᱠᱟᱱᱟ</span> 🙏 ᱾ </br> <span class="highlighted-text">ᱮᱴᱟᱜᱟᱜ ᱟᱹᱲᱟ</span> ᱥᱮᱫᱽᱨᱟᱭ ᱢᱮ ᱾ ᱱᱚᱸᱰᱮ ᱫᱚ <span class="highlighted-text">ᱵᱟᱱᱟᱨ ᱯᱟᱹᱨᱥᱤᱛᱮ ᱥᱮᱫᱽᱨᱟ ᱜᱟᱱᱚᱜᱼᱟ</span>, ᱢᱮᱱ ᱫᱚ <span class="highlighted-text">ᱥᱟᱱᱛᱟᱲᱛᱮ ᱦᱚᱸ ᱟᱨ ᱤᱝᱞᱤᱥᱛᱮ ᱦᱚᱸ</span> ᱾
      </div>
    `;
  }

  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  window.onresize = function() {
    displayDictionary();
  };
});
