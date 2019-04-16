import tokenService from './tokenService';
const BASE_URL = '/api/gameStates';

/*--------------On Pick Game Mode-----------------*/

function create(username) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({
            gameIsOpen: true,
            gameIsSinglePlayer: true,
            user1: username
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .catch(err => {
        console.log(err)
    })
};

/*----------- On New Game Start -------------*/

function newGameStart() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => {
        if (res.ok) return res.json()
    })
}

/*---------On Ending Game Early -------------*/

function deleteGame() {
    return fetch(BASE_URL + '/delete', {
        method: 'DELETE',
    })
    // .then(res => {
    //     console.log(res)
    //     return res.json()
    //     // if(res.ok) return res.json();
    //     // throw new Error('Something broke bbygirl')
    // })
    // // .then(data => data)
    // .catch(err => {
    //     console.log(err)
    // })
};

/*---------On Win/Lose Scenario-------------*/

function updateGame() {

};


/*--------------Exports-----------------*/

export default {
    create,
    newGameStart,
    deleteGame,
    updateGame
}