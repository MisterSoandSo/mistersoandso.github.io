// Get the links
const prevLink = document.getElementById('prevLink');
const nextLink = document.getElementById('nextLink');

// Add or remove disabled class based on section existence
if (!prevLink) {
    prevLink.classList.add('disabled');
    prevLink.removeAttribute('href');
}

if (!nextLink) {
    nextLink.classList.add('disabled');
    nextLink.removeAttribute('href');
}