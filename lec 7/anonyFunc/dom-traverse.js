// apply events through js using event handler

var liTag = document.querySelector('.xyz')
//writing methods without accessing html file.

//event Handling via js.
liTag.onclick = function(){
    console.log(this);
    this.nextElementSibling.style.background = 'red'
    this.previousElementSibling.style.background = '#929'
    this.style.background = '#ccc';
}

var mybutt = document.querySelector('button');

mybutt.onclick = function(){
    var bt = document.querySelector('ul');

    bt.style.background = 'yellow';
}

