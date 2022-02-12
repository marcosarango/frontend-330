// Create the local storage helper functions

// Read a value from local storage and parse it as JSON @param{string} key. They key under which the value is stored under in LS (local storage).
// return {array} The value as an array of objects / function readFromLS(key) {}


// function readFromLS(key){

//     return ;
// }


// Write an array of objects to local storage under the provided key @param{string}key. They key under which the value is stored under in LS (local storage). * @param{array}data  The information to be stored as an array of objects. Must be serialized.


// function writeToLs(key, data){

//     return ;
// }

export const ls = {
    set: function (item) {
        const data = JSON.stringify(item);
        window.localStorage.setItem("todos", data);
        
    },
    get: function () {
        const data = window.localStorage.getItem("todos");
        return (data !== null) ? JSON.parse(data) : null;
    },
}