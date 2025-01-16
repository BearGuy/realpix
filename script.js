document.getElementById('searchQuery').addEventListener('keyup', function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
        searchImages();
    }
});

function searchImages() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        const baseURL = 'https://www.google.com/search?q=';
        const exclusionParams = '-ai -midjourney -stable diffusion -dalle -lexica -nightcafe -site:nightcafe.studio -site:craiyon.com -site:starryai.com -site:lexica.art -site:stablediffusionweb.com -site:playground.com before:2022';
        const fullURL = `${baseURL}${encodeURIComponent(query)} ${encodeURIComponent(exclusionParams)}&tbm=isch`;

        window.location.href = fullURL;
    } else {
        alert('Please enter a search term.');
    }
}
