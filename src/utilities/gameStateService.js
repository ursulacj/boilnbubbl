const BASE_URL = '/api/gameStates/';


// TODO: render game data conditionally

function create(user1, baseComponent) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            gameIsOpen: true,
            gameIsSinglePlayer: true,
            user1,
            baseComponent
        })
        .then(res => {
            // if(res.ok) return res.json();
            // throw new Error('Something broke bbygirl')
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
}


export default {
    create
}