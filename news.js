const apiKey = 'c69a24a3662c45849a36f82969b4a45b'; // Replace with your actual news API key
const baseUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=${apiKey}`;

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

searchButton.addEventListener('click', async function() {
  resultsContainer.innerHTML = ''; // Clear previous results

  const query = searchInput.value.trim();
  if (query === '') {
    alert('Please enter a search term');
    return;
  }

  const url = `${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}&category=politics`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'ok') {
      displayResults(data.articles);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    resultsContainer.innerHTML = '<p>Failed to fetch news. Please try again later.</p>';
  }
});

function displayResults(articles) {
  if (articles.length === 0) {
    resultsContainer.innerHTML = '<p>No articles found.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  
  articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const title = document.createElement('h3');
    title.textContent = article.title;

    const description = document.createElement('p');
    description.textContent = article.description;

    const source = document.createElement('p');
    source.textContent = `Source: ${article.source.name}`;

    const link = document.createElement('a');
    link.href = article.url;
    link.textContent = 'Read more';
    link.target = '_blank';

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(source);
    articleDiv.appendChild(link);

    fragment.appendChild(articleDiv);
  });

  resultsContainer.appendChild(fragment);
}
