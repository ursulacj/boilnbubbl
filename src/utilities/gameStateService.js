const BASE_URL = '/api/gameStates';


// TODO: render game data conditionally using user1 and baseComponent
// pass in user and baseComponent as props. 

function create() {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            gameIsOpen: true,
            gameIsSinglePlayer: true,
            user1: 'UrsulaCJ',
            baseComponent: 'eye of newt'
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