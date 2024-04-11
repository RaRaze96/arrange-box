let lists = document.getElementsByClassName("list")
let items = [1, 2, 3]


 
arrangebox.innerHTML = `
<div class="main">
        <input id="input" class="input" placeholder=" search..." type="text" oninput="search()">
        <div class="top">

            <div class="left">

                <div class="buttons">
                    <button class="butUp" onclick="ButtonElemtop()"></button>
                    <button class="butDown" onclick="ButtonElembottom()"></button>
                </div>

                <div class="itemsList">
                    <div id="left" class="items"></div>
                </div>
            </div>

            <div class="middle">
                <div class="buttons">
                    <button class="butAllLeft" onclick="ButtonLeft()"></button>
                    <button class="butAllRight" onclick="ButtonRight()"></button>
                </div>
            </div>

            <div class="right">
                <div class="itemsList">
                    <div id="right" class="items"></div>
                </div>

                <div class="buttons">
                    <button class="butUp" onclick="ButtonElemtop()"></button>
                    <button class="butDown" onclick="ButtonElembottom()"></button>
                </div>

            </div>

        </div>
        <div class="bot">
            <button class="reboot" onclick="ButtonDrop()"> RESET</button>
            <button class="gen" onclick="ButtonAdd()">GENERATE</button>
        </div>

    </div>
`;



getElement() 
function search() { 
    for (let list of lists) {
        list.classList.remove('newClassNone')
    }
        
    for (let list of lists)
        list.classList.remove('newClassNone')
    for (let list of lists) {
        if (!(list.innerHTML === input.value)) {
            if (!(input.value == '')) {
                list.classList.add('newClassNone')
}
                
        }

    }
}

function ButtonElembottom() { 
    if (input.value != 0) return
    iter = 0;
    let count = 0;
    let rem = 0;
    let rem2 = 0;
    let child1;
    let child;

 
    left1 = document.querySelector('#left')
    if (left1.lastElementChild != null)
        child = left1.lastElementChild.id

    right1 = document.querySelector('#right')

    if (right1.lastElementChild != null)
        child1 = right1.lastElementChild.id

    for (let list of lists) {

        if ((list.id === child || list.id === child1) && (list.classList.contains('active'))) {
            return
        }
    }
    for (let list of lists) {
        if (rem != 0) {
            console.log(rem)
            list.classList.add('active')
            document.getElementById(rem).id = list.id
            list.id = rem;
            document.getElementById(list.innerHTML).innerHTML = list.innerHTML

            list.innerHTML = rem2
            rem = 0;
            rem2 = 0
            count = 1;
        }
        if (list.classList.contains('active') && iter == 0) {
            rem = list.id
            rem2 = list.innerHTML
            list.classList.remove('active')
            iter = 1;
        }
    }
}

function ButtonElemtop() { 
    if (input.value != 0) return
    let count = 0
    let left1;
    let right1;
    let remid3;
    let rem3inner;
    let remid4;
    let child1;
    let child;

    left1 = document.querySelector('#left')
    if (left1.firstElementChild != null)
        child = left1.firstElementChild.id

    right1 = document.querySelector('#right')

    if (right1.firstElementChild != null)
        child1 = right1.firstElementChild.id

    for (let list of lists) {

        if ((list.id === child || list.id === child1) && (list.classList.contains('active'))) {
            return
        }
    }
    for (let list of lists) {

        if (list.classList.contains('active')) {
            remid4 = list.id
            document.getElementById(remid3).innerHTML = list.innerHTML
            list.innerHTML = rem3inner
            list.id = remid3;
            list.classList.remove('active')
            document.getElementById(remid3).classList.add('active')
            document.getElementById(remid3).id = remid4
            count = 1
        }
        remid3 = list.id;
        console.log(remid3)
        rem3inner = list.innerHTML
    }

}


function ButtonRight() {
    if (input.value != 0) return
    let t = 0;
    for (let list of lists) {
        items[t] = list.id
        t++
    }
    right.innerHTML = ''
    for (let item of items) {
        right.insertAdjacentHTML('beforeend',
            getItems(item))
    }

    left.innerHTML = ''
    DRAGandDROP();
    deactive()
    console.log(document.getElementById(1).id)
}

function ButtonLeft() {
    if (input.value != 0) return
    t = 0
    for (let list of lists) {
        items[t] = list.id
        t++
    }
    left.innerHTML = ''
    for (let item of items) {
        left.insertAdjacentHTML('beforeend',
            getItems(item))
    }

    right.innerHTML = ''
    DRAGandDROP();
    deactive()
    console.log(document.getElementById(1).id)
}


function ButtonDrop() {
    items = [1, 2, 3]
    left.innerHTML = ''
    right.innerHTML = ''
    getElement()
}


function getItems(item) {
    console.log(item)
    return ` <div  id= "${item}" class="list " draggable="true">${item}</div> `
}
function getElement() {
    for (let item of items) {
        left.insertAdjacentHTML('beforeend',
            getItems(item))
    }
    DRAGandDROP();
    deactive()
}


function ButtonAdd() {
    let pushEl = Math.floor(Math.random() * (100 - 4 + 1)) + 4;

    items.push(pushEl)
    left.insertAdjacentHTML('beforeend',
        getItems(items[items.length - 1]))
    DRAGandDROP()
    deactive()
}
function deactive() {
    for (let list of lists) {
        list.addEventListener("click", function () {

            for (let list of lists)
                list.classList.remove('active')
            this.classList.add('active')
        })
    }
}

function DRAGandDROP() {

    for (let list of lists) {
        list.addEventListener('dragstart', function (e) {
            let selected = e.target;
            setTimeout(() => { this.classList.add('hide'); }, 0)
            right.addEventListener("dragover", function (e) {
                e.preventDefault();
            })
            right.addEventListener("dragenter", function () {
                this.classList.add('hovered');
            })
            right.addEventListener("dragleave", function () {
                this.classList.remove('hovered');
            })

            right.addEventListener("drop", function () {
                right.appendChild(selected)
                selected = null
                this.classList.remove('hovered');
            })
            left.addEventListener("dragover", function (e) {
                e.preventDefault();
            })
            left.addEventListener("drop", function () {
                left.appendChild(selected)
                selected = null
                this.classList.remove('hovered');
            })
            left.addEventListener("dragenter", function () {
                this.classList.add('hovered');

            })
            left.addEventListener("dragleave", function () {
                this.classList.remove('hovered');
            })
        })
        list.addEventListener('dragend', function () {
            this.classList.remove('hide');
        })
    }
}