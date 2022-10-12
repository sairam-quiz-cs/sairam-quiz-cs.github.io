//Question bank
var questionBank= [
    {
        question : 'Whether the Aicte idea lab is present in sairam ?',
        option : ['Yes','No'],
        answer : 'Yes'
    },
    {
        question : 'The purpose of the SDGs is to',
        option : ['Create 17 goals','Help all humans live sustainably','Engage millions of people and thousands of organisations','help'],
        answer : 'Help'
    },
    {
        question : 'The SDGs are focussed on',
        option : ['the past','the past and the present','the present','the present and the future'],
        answer : 'the present and the future'
    },
    {
        question : 'Which SDG aims to Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
        option : ['No Poverty','Good Health and Well-Being','Affordable and Clean Energy','Life below Water'],
        answer : 'Life below Water'
    },
    {
        question : 'Which is not a purpose of the SDG ?',
        option : ['to promote peace','to promote prosperity','to promote equality','to promote challenge'],
        answer : 'to promote challenge'
    },
    {
        question : 'The SDGs are',
        option : ['independent of each other','linked to each other'],
        answer : 'linked to each other'
    },
    {
        question : 'Which is not an obstacle to achieving the SDG?',
        option : ['differences in income','ecological problems','capital cities','using more than we produce or grow'],
        answer : 'capital cities'

    },
    {
        question : 'Who should be involved for the SDG to be met?',
        option : ['Individuals','Governments','voluntary organisartions','private companies'],
        answer : 'Governments'
    },
    {
        question : 'Augmented reality, Virtual reality and Mixed reality can be put together as',
        option : ['Artificial reality','Extended reality','Ultimate reality'],
        answer : 'Extended reality'
    },
    {
        question : 'Microsoft hololens 2 is a gear for',
        option : ['Mixed reality','Virtual reality','Augmented reality'],
        answer : 'Mixed reality'

    },
    {
        question : 'Which of the following is a standalone VR gear',
        option : ['Meta Quest 2','HTC Vive Pro 2','Oculus Rift'],
        answer : 'Meta Quest 2'
    },
    {
        question : 'How many 2d images are required to generate a 3d image ?',
        option : ['2','3','360'],
        answer : '2'
    },
    {
        question : 'Which SOC is used in Meta Quest 2',
        option : ['Nvidia RTX 3090Ti','Intel i7 12700k','Snapdragon XR2'],
        answer : 'Snapdragon XR2'

    },
    {
        question : 'What is full form of UAV?',
        option : ['Unarmed Aircraft Vehicle','Unarmed Aerial Vehicle','Unmanned Aeroplance Vehicle','Unarmed Aircraft Vehicle'],
        answer : 'Unarmed Aerial Vehicle'
    },
    {
        question : 'Components of Unmanned Aircraft System (UAS) does not consists of ____',
        option : ['UAV','Ground based controller','Air strip for landing','A communication system between UAV and Controller'],
        answer : 'Air strip for landing'
    },
    {
        question : 'Which of the following is not a term used for drones?',
        option : ['Rapid Action Fight System (RAFS)','Unmanned Aircraft Vehicle System (UAVS)','Remotely Piloted Aerial System (RPAS)','Remotely Piloted Aircraft System (RPAS)'],
        answer : 'Rapid Action Fight System (RAFS)'
    },
    {
        question : 'Which of the following category of drones does not require registration for use in India?',
        option : ['Micro Category','Small Category','Nano Category','Large Category'],
        answer : 'Nano Category'
    },
    {
        question : 'As per drone categories in India weight of the Nano drone should be ____',
        option : ['More than 250gram','Less or equal to 250gram','250gram to 2kg','2kg to 4kg'],
        answer : 'Less or equal to 250gram'
    },
    {
        question : 'permit is not required for Nano category drones to fly upto ____ feet',
        option : ['150','50','200','100'],
        answer : '50'
    },
    {
        question : 'A permit is not required for Micro category drones to fly upto ____ feet',
        option : ['100','300','250','200'],
        answer : '200'
    },


]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();