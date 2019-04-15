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
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({

        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .catch(err => {
        console.log(err)
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