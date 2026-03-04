const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const baseUrl = 'https://github.com/elidianaandrade/dio-lab-open-source/tree/main/community';

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // O .trim() remove espaços antes e depois do que o usuário digitou
  const searchValue = searchInput.value.trim();
  
  if (searchValue === '') {
    window.open(baseUrl, '_blank');
    return;
  }
  
  const url = `${baseUrl}/${encodeURIComponent(searchValue)}.md`; 
  window.open(url, '_blank');
});
