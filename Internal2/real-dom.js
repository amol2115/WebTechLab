// real-dom.js (Manipulating Real DOM directly)
const realDomDiv = document.getElementById('real-dom');
const button = document.createElement('button');
button.innerText = 'Update Real DOM';
const text = document.createElement('p');
text.innerText = 'Real DOM Text';

button.onclick = function () {
  text.innerText = 'Real DOM Text Updated!';
};

realDomDiv.appendChild(button);
realDomDiv.appendChild(text);
