const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = `<span>&#8220;</span>${
    quotes[randomIndex].split(" - ")[0]
  }<span>&rdquo;</span>`;
  document.getElementById("author").innerHTML = `&mdash; ${
    quotes[randomIndex].split(" - ")[1]
  }`;
}

function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quote);
}
