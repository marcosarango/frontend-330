// Create DOM manipulation helper functions in utilities.js ????  building ul and li items?
// Do a querySelector lookup @param{string} selector   The selector passed to querySelector @return {element}  The matching element or null if not found


// function qs(selector){

    // return Element or null if not found;
// }

// add a touchend event listener to an element for mobile with a click event fallback for desktops @param{string} elementSelector  The selector for the element to attach the listener to.  *@param{function} callback  The callback function to run

// function onTouch(elementSelector, callback) {

//     return ;
// }

// export default something;

export const ls = {
    set: function (name, item) {
        const data = JSON.stringify(item);
        window.localStorage.setItem(name, data);
        
    },
    get: function (name) {
        const data = window.localStorage.getItem(name);
        return (data !== null) ? JSON.parse(data) : null;
    },
}