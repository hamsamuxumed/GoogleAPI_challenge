const form = document.getElementById('form');
const form2 = document.getElementById('form-2');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchRequest = form.elements.query.value;
    const Urlreq = { params: { q: searchRequest } };
    const res = await axios.get("http://localhost:3000/search/", Urlreq)
    searchOutputs(res.data);
    forms.elements.query.value = ''


})

const searchOutputs = (searches) => {
    for (let result of searches) {
        document.body.append(result)
    }
}

// form2.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log('works')

// })
