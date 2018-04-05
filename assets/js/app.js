const form = document.getElementById('form');
const inputList = document.getElementById('inputName');
const addButton = document.getElementById('addButton');
const show = document.getElementById('show');

let itemsArray = []; // condition ? true : false ;

// save to local storage
localStorage.setItem('items', JSON.stringify(itemsArray)); //set 'items' JSON.stringify mengubah objek JSON(objek) ke string & simpan ke localStorage
const data = JSON.parse(localStorage.getItem('items')); // get 'items' JSON.parse mengubah string JSON[objek] ke objek

// add a list of content
const listTodo = (text) => {
  const div = document.createElement('div'); // create elemen HTML <li>
  div.innerHTML = `${text} <i onclick='deleteTodo()' class='fa fa-remove'></i>`; // properti
  show.appendChild(div);
}

// push list
const createTodo = function(e) {
  e.preventDefault();

  if (inputList.value == '') {
    alert('Enter a List ToDo');
  } else {
    listTodo(inputList.value);
    itemsArray.push({
      todo: inputList.value,
    });
    localStorage.setItem('listTodo', JSON.stringify(itemsArray));
    inputList.value = '';
  }
};

const deleteTodo = node => {
  show.removeChild(show.lastElementChild);
  itemsArray.splice('listTodo',1);
  localStorage.setItem('listTodo', JSON.stringify(itemsArray));
};

addButton.addEventListener('click', createTodo);
form.addEventListener('submit', createTodo);
// enter in input box to create list
// form.addEventListener('submit', createContact);

// click add button to push list
// addButton.addEventListener('click', createContact);

/*data.forEach(item=> {
  listContact(item);
})

clear.addEventListener('click', function() {
  localStorage.clear();
  while(show.firstChild) {
    show.removeChild(show.firstChild);
  }
});
*/
