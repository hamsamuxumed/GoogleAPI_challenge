
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
        listResult.innerText = `${result.keyword} - ${result.description}`;
        document.getElementById('displayResults').appendChild(listResult);
        //document.body.append(result.keyword);
        //document.body.append(result.description);
    }
}

btn2.addEventListener('click', () => {
    console.log('works')
})
