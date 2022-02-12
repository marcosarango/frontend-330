const links = [
  { label: "Week 1 notes", url: "week1/index.html" },
  { label: "Week 2 notes", url: "week2/index.html" },
  { label: "Week 3 notes", url: "week3/index.html" },
  { label: "Week 4 notes", url: "week4/index.html" },
  { label: "Week 5 notes", url: "week5/index.html" },
  { label: "Week 6 notes", url: "project/index.html" },
 
];

let list = document.getElementById("list");

for (let i = 0; i < links.length; i++) {
  let li = document.createElement("li");
  let label = links[i].label;
  let url = links[i].url;
  li.innerHTML = "<a href='" + url + "'>" + label + "</a>";
  list.appendChild(li);
}