const apiKey = 'c69a24a3662c45849a36f82969b4a45b'; // Replace with your actual API key from NewsAPI.org
const endpoint = 'https://newsapi.org/v2/everything';

// Example parameters
const query = 'Kenya politics';
const fromDate = '2024-01-01'; // Example date range
const sortBy = 'publishedAt'; // Sort articles by published date

// Constructing the URL with parameters
const url = `${endpoint}?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}`;

// Making the API request using fetch
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the JSON response (data variable) here
    console.log(data); // Log the response to see the structure of the data
    // Example: Displaying titles of articles
    data.articles.forEach(article => {
      console.log(article.title); // Replace with your handling logic
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
