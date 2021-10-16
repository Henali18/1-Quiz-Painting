var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question('Enter Your Name: ');
console.log('');
console.log(chalk.blueBright(`Hello ${username}!!!`))
console.log(chalk.cyan('---> Welcome to the Quiz'))
console.log('');
console.log('Points: ')
console.log(chalk.green('Correct: +5'))
console.log(chalk.red('Incorrect: -2'))
console.log('');
console.log('Subject: Painting')
console.log(chalk.yellow('Answer Them with (a,b,c,d)'))
console.log('');

var questions = [
   {question: `Which of the following styles of painting belongs to Maharashtra?`,A: 'Minature', B:
   'Madhubani', C:'Kalam',D:'Warli', answer: 'd'},
   {question: `What do Madhubani paintings depict?`,A: 'Life of Bhagwan Buddha', B:
   'Western Calture', C:'Nature and Hindu religious figuure',D:'Life of Birsa Munda', answer: 'c'},
   {question: `Kalamkari painting is related to which state?`,A: 'Andhra Pradesh', B:'Manipur', C:'West Bengal', D:'Maharashtra', answer: 'a'},
   {question: `The process of coating grooves or engravings in ornaments with coloured enamels is called_______.`,A: 'Menakari', B:
   'Chikankari', C:'Phulkari',D:'Zardozi', answer: 'a'},
   {question: `Madhubani painting style is native to which state?`,A: 'Orissa', B:
   'Andhra Pradesh', C:'Bihar', D:'Madhya Pradesh',answer: 'c'},
   {question: `Which of the following is a traditional painting of Odisha?`,A: 'Warli', B:
   'Pattachitra', C:'Sanjhi', D:'Madhubani',answer: 'b'},
   {question: `Who among the following is discoverer of Mohenjo-Daro?`,A: 'John marshall', B:
   'James prinsep', C:'Archibold Carlleyle', D:'RD banerjee',answer: 'd'},
   {question: `Madhubani painting is style of indian painting, practiced in the Mithila region of_______in india?`,A: 'Jharkhand', B:
   'Odisha', C:'Chattisgarh', D:'Bihar',answer: 'd'},
   {question: `In which region of Bihar Madhubani paintings are practiced?`,A: 'Mithila', B:
   'Magadh', C:'Anga', D:'Bhojpur',answer: 'a'},
   {question: `Pattachitra Art is the folk painting of which state?`,A: 'Andhra Pradesh', B:
   'Bihar', C:'Gujarat', D:'Odisha',answer: 'd'},
 ];
var score = 0;

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.white(n+'. '+questions[i].question));
  console.log(chalk.cyan('A: '+questions[i].A));
  console.log(chalk.cyan('B: '+questions[i].B));
  console.log(chalk.cyan('C: '+questions[i].C));
  console.log(chalk.cyan('D: '+questions[i].D));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.green('Correct'));
    score = score + 5;
  }else{
    console.log(chalk.red('Incorrect'));
    console.log(chalk.green('correct answer is: ')+ questions[i].answer);
    score = score -2;
  }
  console.log(chalk.blue('Your current score is: '+ score));
  console.log('');
}
console.log(chalk.blue('---> Your final score is: '+ score));
console.log('Thank you for playing!!!');