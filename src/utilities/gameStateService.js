const BASE_URL = '/api/gameStates';


// TODO: render game data conditionally using user1 and baseComponent


function create(username) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            gameIsOpen: true,
            gameIsSinglePlayer: true,
            user1: username
        })
    })
    .then(res => {
        console.log(res)
        return res.json()
        // if(res.ok) return res.json();
        // throw new Error('Something broke bbygirl')
    })
    // .then(data => data)
    .catch(err => {
        console.log(err)
    })
}


export default {
    create
}