let questioninp = document.querySelector('.titleinp');
let continp = document.querySelector('.contentinp');
let addbtn = document.querySelector('.addbtn');
let questioncont = document.querySelector('.questions')
let ansoup = document.querySelector('.answer-cont')
let container = document.querySelector('.event-cont');
let arrcont = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items',JSON.stringify(arrcont))
let datacont = JSON.parse(localStorage.getItem('items'))

// add questions and answer

addbtn.addEventListener('click', function(e){
    e.preventDefault();
    let newquest = {}
    newquest.question = questioninp.value
    newquest.answer = continp.value;
    arrcont.push(newquest)

    localStorage.setItem('items', JSON.stringify(arrcont))

    $(function(){
        $('.post-form').toggle()
    })

    location.reload('true')
})

// loop through all data, create a div that holds all obbject properties
datacont.forEach(i => {
        let div = document.createElement('div');
        div.setAttribute('class', 'divcont')
        div.innerHTML = `
        <div class="card">
        <div class="card-header">
            <h5>Questions</h5>
            <div class="questions">
                ${i.question}
            </div>
        </div>
        <div class="card-body">
            <div class="answer-cont">
            <h6>Answer</h6>
                ${i.answer}
            </div>
            <div class="">
                <button class="btn btn-info hideandseebtn">
                    SEE/HIDE
                </button>
                
            </div>
        </div>
    </div>
    `

    container.appendChild(div);
    document.body.appendChild(container)

    let hideandseebtn = document.querySelectorAll('.hideandseebtn');
    hideandseebtn.forEach((i)=>{
        i.addEventListener('click', (e)=>{
          
        })
    })
});


// cansel form
$(function(){
    $('.cancbtn').click(function(){
        $('.post-form').css('display', 'none')
    })
})
// clear all cards 
let clrbtn = document.querySelector('.clrbtn');
clrbtn.addEventListener('click', function(){
    localStorage.clear();
    location.reload('true')
})

// hide and show post form
$(function(){
    $('.actlink').click(function() {
        $('.post-form').toggle()
    })
    let btn = document.querySelectorAll('.hideandseebtn')
    btn.forEach((btn, i) =>{
        btn.addEventListener('click', function(e){
        let cls = document.querySelectorAll('.answer-cont')
        $(cls[i]).toggle()
        });
    })
})


// edit content

// let editbtn = document.querySelectorAll('.editbtn')
// editbtn.forEach((e, i)=>{
//     e.addEventListener('click', function(e){
//         let h = document.querySelectorAll('.divcont')
//         let newdata = JSON.parse(localStorage.getItem("items"))
//         let a = newdata[i]
//         let newar = []
//         newar.push(a)
//         console.log(newar.splice(0,1)); 
//         // newdata.forEach((i, e)=>{
//         //     let a = delete i
//         //     console.log(a);
//         // })
//     })
// })