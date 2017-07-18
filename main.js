console.log('HEY YOU!');
//set url
var url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q='

//create variables for dynamically creating li's because we're cool kids and that's what cool kids do
var ulTarget = document.querySelector('.recipeLists');
var submitButton = document.querySelector('button')
var searchField = document.querySelector('#search')
var searchItem = '';

submitButton.addEventListener('click',submitSearch);
function submitSearch(){
  var testp = document.querySelector('.testp');
  searchItem = searchField.value;
  url += searchItem;

//get data
fetch(url)
.then(response => response.json())
.then(data => {
  for (var i=0; i<data.results.length; i++){
    var newLI = document.createElement('li');

    var newH3 = document.createElement('h3');
    newH3.textContent = data.results[i]['title'];
    newLI.appendChild(newH3);

    var newImg = document.createElement('img');
    if (data.results[i]['thumbnail'] === ''){
      newImg.setAttribute('src', 'http://via.placeholder.com/200x200')
    }
    else {
      newImg.setAttribute('src',data.results[i]['thumbnail']);
    }
    newLI.appendChild(newImg);

    var newLink = document.createElement('a');
    newLink.href = data.results[i]['href'];
    newLink.innerText = 'Link';
    newLI.appendChild(newLink);

    ulTarget.appendChild(newLI);

    console.log(data.results[i]);
  }
})
}
