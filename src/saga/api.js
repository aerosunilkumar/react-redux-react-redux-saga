const apiBase = 'https://practiceapi.devmountain.com';

function* getToDoListAPI() {
    const result = yield fetch(`${apiBase}/api/tasks`)
        .then(res => res.json())
    return yield result;
}



function* addToDoItemAPI(todoItem) {
    const result= yield fetch(`${apiBase}/api/tasks`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
   }),
        body: JSON.stringify(todoItem)
    }).then(res => res.json());
    return yield result;
}

function* updateToDoItemAPI(todoItem) {
    const result= yield fetch(`${apiBase}/api/tasks/${todoItem.id}`, {
        method: 'PATCH',
        headers: new Headers({
            'Content-Type': 'application/json'
   }),
          body: JSON.stringify(todoItem)
    }).then(res => res.json());
    return yield result;
}

function* deleteToDoItemAPI(todoItem) {
    const result= yield fetch(`${apiBase}/api/tasks/${todoItem.id}`, {
        method: 'DELETE'
    }).then(res => res.json());
    return yield result;
}

function* completeToDoItemAPI(todoItem) {
    const result= yield fetch(`${apiBase}/api/tasks/${todoItem.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
    }).then(res => res.json());
    return yield result;    
}

export const Api = {
    getToDoListAPI,
    addToDoItemAPI,
    updateToDoItemAPI,
    deleteToDoItemAPI,
    completeToDoItemAPI
}; 