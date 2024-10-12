const rightOrwrong = document.querySelector(".right_or_Wrong");
const submit = document.querySelector(".submit");
const next = document.querySelector(".next");
const option = document.querySelector(".option");
const time = document.querySelector(".time");
const totalRignt = document.querySelector(".pluspoints");
const totalwrong = document.querySelector(".minuspoint");

 


const questions = [
     {
        question:"Which of the following is NOT a property of bases?",

        option1:"They react with acids and neutralise them",
        option2:"They turn red litmus blue",
        option3:"They turn blue litmus red",
        option4:"They have bitter taste",

        answer:"They turn blue litmus red"
     },
    {
        question: "The purest form of iron is",

        option1:"wrought iron",
        option2:" steel",
        option3:"pig iron",
        option4:"nickel steel",

        answer:"wrought iron"
    },
    {
        question: "The maximum number of electrons that can be accommodated in a shell depends on the formula",

        option1:"1n2",
        option2:"n2",
        option3:"3n2",
        option4:"2n2",

        answer:"2n2"
    }
]
 
function createhtml(x){
    
    const questionhtml =
       `<p class="bg-white text-black p-2 text-lg font-semibold rounded-lg">${ questions[x].question}</p>
          <form action="question">
              <div class="queston flex-row list-none m-5 text-lg text-left">
                <li class="py-5">
                     <label for="option1">
                      <input class="option " type="radio" name="option" id="option1" value="${questions[x].option1}">
                      ${ questions[x].option1}
                     </label>
                 </li>
                 <li class="py-5">
                     <label for="option2">
                         <input class="option " type="radio" name="option" id="option1" value="${questions[x].option2}">
                         ${ questions[x].option2}
                     </label>
                 </li>
                 <li class="py-5">
                     <label for="option3">
                         <input class="option " type="radio" name="option" id="option1" value="${questions[x].option3}">
                         ${ questions[x].option3}
                     </label>
                 </li>
                 <li class="py-5">
                     <label for="option4">
                         <input class="option " type="radio" name="option" id="option1" value="${questions[x].option4}">
                         ${questions[x].option4}
                     </label>
                 </li>
              </div>
          </form>  `;


    document.querySelector(".question_continer").innerHTML= questionhtml;
}


// Next Button addEventListener
var x =-1;
next.addEventListener('click', ()=>{
   rightOrwrong.innerHTML = '';
   
   countdown( );
 
   x++; 
   if(x < questions.length){
       createhtml(x);
    }
   else(
       x=-1
   )    
       
});
 
// submit button addEventListener
var rightcount=0;
var wrongcount=0;
submit.addEventListener('click', ()=>{
    
    radioSelection();
    if (rightOrwrong.innerHTML =="Right Answer"){
        
        rightcount++;
        totalRignt.innerHTML = rightcount;
    
    }
    else{
        wrongcount++;
        totalwrong.innerHTML = wrongcount;
    
    }
    
})  ;  

const radioSelection =()=>{

        let findValue;
    const radios = document.getElementsByName('option');
     
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            findValue =  radios[i].value;
             
        }
    }
   
    if(questions[x].answer == findValue){
        rightOrwrong.innerHTML ="Right Answer";
         
    }
      
    else{
        rightOrwrong.innerHTML ="wrong Answer";
         
    }
    }

const countdown=( )=>{
    let times =10;

    var interval = setInterval(()=>{
        
        let second = times %60;
        


        if(second == 0 || rightOrwrong.innerHTML =="Right Answer" || rightOrwrong.innerHTML =="wrong Answer" ){ 
            time.innerHTML = `00`;
            rightOrwrong.innerHTML ="Times up"; 
            clearInterval(interval); 
            console.log(' working')
        }
        else{
            time.innerHTML = `${second}`;     
            times --;
            console.log('not working')
               
        }
         

       
        
    },1000);

    
}
