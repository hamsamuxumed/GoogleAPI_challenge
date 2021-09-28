
const form = document.getElementById('form');
const btn2 = document.getElementById('btn-2');


// on submit data is fetch from the server and passed on to the searchOutputs function
form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const searchRequest = form.elements.query.value;
        const res = await fetch(`http://localhost:3000/search/${searchRequest}`)
        const jsonResponse = await res.json();
        searchOutputs(jsonResponse);
        console.log(jsonResponse);
        form.elements.query.value = ''
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})

// this function iterate over the objects and creates and li's for each of them 
const searchOutputs = (searches) => {
    for (let result of searches) {
        let listResult = document.createElement('li');
        listResult.innerText = `${result.keyword} - ${result.source} - ${result.description}`;
        document.getElementById('displayResults').appendChild(listResult);
        //document.body.append(result.keyword);
        //document.body.append(result.description);
    }
}

const getRandomSite = async () => {
    try{
        const searchRequest = form.elements.query.value;
        const res = await fetch(`http://localhost:3000/search/${searchRequest}`)
        const jsonResponse = await res.json();
        let randIndex = Math.floor(Math.random() * jsonResponse.length);
        window.location.href = jsonResponse[randIndex].url;
        console.log(jsonResponse);
        console.log(jsonResponse[randIndex].url);
        console.dir(window.location);
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}

btn2.addEventListener('click', () => {
    getRandomSite();
})

