document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dictionaryDiv = document.getElementById('dictionary');
  const modal = document.getElementById('modal');
  const modalSantali = document.getElementById('modalSantali');
  const modalEnglish = document.getElementById('modalEnglish');
  const closeModal = document.getElementsByClassName('close')[0];

  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/sat-en.json'); // Update with your raw JSON URL
      const data = await response.json();
      adjustDisplay(data);

      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredDictionary = data.filter(entry =>
          entry.santali.toLowerCase().includes(query) || entry.english.toLowerCase().includes(query)
        );
        adjustDisplay(filteredDictionary);
      });

      window.addEventListener('resize', () => adjustDisplay(data));
    } catch (error) {
      console.error('Error fetching the dictionary data:', error);
    }
  };

  const adjustDisplay = (data) => {
    const displayCount = getDisplayCount();
    const dictionary = data.slice(0, displayCount);
    displayDictionary(dictionary);
  };

  const getDisplayCount = () => {
    const width = window.innerWidth;
    if (width < 600) return 5;
    if (width < 900) return 10;
    return 15;
  };

  const displayDictionary = (dictionary) => {
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
        modalSantali.textContent = entry.santali;
        modalEnglish.textContent = entry.english;
        modal.style.display = 'block';
      });
    });
  };

  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  fetchData();
});
