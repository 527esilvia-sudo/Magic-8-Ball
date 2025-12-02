function shakeMagic8Ball() {
    const question = prompt("What would you like to ask the Magic 8 Ball?");

    if (question === null) {
        document.getElementById('response-text').innerText = "Please input a valid question...";
        document.getElementById('response-text').classList = 'lead text-danger';
        document.getElementById('response-img').src = 'sadface.jpg';
    }

 if (!question.trim()){
    alert('PLEASE ASK A VALID QUESTION');
 }


 const randomNumber = Math.floor(Math.random()*8);
 let answer, image, color;

 switch(randomNumber){
    case 0:
    answer = 'Yes';
    image = 'yes-image.png';
    color = ' text-success';

    break;

       case 1:
    answer = 'Not Likely';
    image = 'yes-image.jpg';
    color = 'text-warning';

    break;

       case 2:
    answer = 'Prospects Poor';
    image = 'yes-image.jpg';
    color = ' text-primary';

    break;

       case 3:
    answer = 'Absolutely';
    image = 'yes-image.jpg';
    color = ' text-success';

    break;

       case 4:
    answer = 'It is certain';
    image = 'yes-image.jpg';
    color = 'text-success';

    break;

       case 5:
    answer = 'Outlook Good';
    image = 'yes-image.jpg';
    color = 'text-success';

    break;

       case 6:
    answer = 'As I see it, yes';
    image = 'yes-image.jpg';
    color = 'text-success';

    break;

       case 7:
    answer = 'Dont count on it';
    image = 'yes-image.jpg';
    color = 'text-warning';

    break;


 }


 document.getElementById('response-text').innerText = answer
        document.getElementById('response-text').classList = `display-4 text-center strong ${color}`
        document.getElementById('response-img').src = image
}
