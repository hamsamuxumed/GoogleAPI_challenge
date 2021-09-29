
const form = document.getElementById('form');
const btn2 = document.getElementById('btn-2');

//On submit data is fetched from the server and passed on to the searchOutputs function
form.addEventListener('submit', async (e) => {

    let searchRequest = form.elements.query.value;
    
    if(searchRequest){
        try {
            e.preventDefault();
            
            //Perform fetch with search query
            const res = await fetch(`http://localhost:3000/search/${searchRequest}`)
            const jsonResponse = await res.json();
            console.log(jsonResponse.result);
            
            //Call result display function with results
            searchOutputs(jsonResponse.result);
            
            //Empty searchbox
            searchRequest = '';
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    } else {
        alert('Please enter a search query');
    }
    
})

// this function iterate over the objects and creates and li's for each of them 
const searchOutputs = (searches) => {
    
    const resultList = document.getElementById('displayResults');
    document.querySelector('img').style.display = 'none';
    
    //Empty results currently on the page
    while(resultList.firstChild){
        resultList.firstChild.remove()
    }

    //Append search results to a list on the display page
    for (let search of searches) {
        let listResult = document.createElement('li');
        let listResultLink = document.createElement('p');
        let listResultTitle = document.createElement('a');
        let listResultContent = document.createElement('p');
        listResultLink.setAttribute('id', 'resultLink');
        listResultContent.setAttribute('id', 'resultContent');
        listResultLink.innerText = search.link;
        listResultTitle.innerText = search.title;
        listResultTitle.href = search.link;
        listResultContent.innerText = search.snippet;
        document.getElementById('displayResults').appendChild(listResult);
        listResult.appendChild(listResultLink);
        listResult.appendChild(listResultTitle);
        listResult.appendChild(listResultContent);
    }
}

//This function gets data from the server and picks a random url from the data -- some results are a bit dodgy, use at own risk
const getRandomSite = async () => {
    
    //Store search query
    let searchRequest = form.elements.query.value;
    
    if(searchRequest){
        try {
            //Fetch result from server
            const res = await fetch(`http://localhost:3000/search/${searchRequest}`)
            const jsonResponse = await res.json();
            
            //Get a random index from the results array
            let randIndex = Math.floor(Math.random() * jsonResponse.result.length);
    
            //Navigate the user to the link from the retrieved random result 
            window.location.href = jsonResponse.result[randIndex].link;
            console.dir(window.location);
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    } else {
        alert('Please enter a search query');
    }
    
}

btn2.addEventListener('click', () => {
    //Call random site function
    getRandomSite();
})

