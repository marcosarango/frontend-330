const links = [
    {
        label: "Week1", 
        url: ""
    },
]

const list = document.getElementById('weekList');

for (let i=0; i<links.length; i++){
  // create an element <li> <a></a> </li> inside <ol></ol>
  let li = document.createElement('li');
  let a  = document.createElement('a');

  a.setAttribute('href', links[i].url); //set a link/url for Week[i]
  a.textContent = links[i].label + " : " + links[i].notes;  // set a Label of Week[i]

  li.appendChild(a); // put the a inside the li
  list.appendChild(li); // put the li inside the #list
};

  console.log("hello world!")
