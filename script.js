document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dictionaryDiv = document.getElementById('dictionary');
  const modal = document.getElementById('modal');
  const modalWord = document.getElementById('modalWord');
  const modalDefinition = document.getElementById('modalDefinition');
  const closeModal = document.getElementsByClassName('close')[0];

  fetch('https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/sat-en.json') // Update with your raw JSON URL
    .then(response => response.json())
    .then(data => {
      const dictionary = data.slice(0, 7); // Only show the first 7 words
      displayDictionary(dictionary);

      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredDictionary = data.filter(entry =>
          entry.santali.toLowerCase().includes(query) || entry.english.toLowerCase().includes(query)
        ).slice(0, 7); // Limit to 7 results
        displayDictionary(filteredDictionary);
      });
    })
    .catch(error => console.error('Error fetching the dictionary data:', error));

  function displayDictionary(dictionary) {
    dictionaryDiv.innerHTML = '';
    dictionary.forEach(entry => {
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
        modalWord.textContent = entry.santali;
        modalDefinition.textContent = entry.english;
        modal.style.display = 'block';
      });
    });
  }

  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
