const links = [
    {label: "Week1", URL: "/week1/index.html"},
]
const list = document.getElementById("weekList");
for (let i = 0; i< links.length; i++){
    let li = document.createElement("li");
    let label = links[i].label;
    let URL = links[i].URL;
    li.innerHTML = "<a href=" + URL + ">" + label + "</a>";
    list.appendChild(li);
    
}
