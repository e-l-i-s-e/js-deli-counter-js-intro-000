var katzDeliLine = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length + 1} in line.`
}

function nowServing(){
 if(katzDeliLine.length > 0){
   var name = katzDeliLine[0];
   katzDeliLine.shift();
   return `Currently serving ${katzDeliLine[0]}`;
 }
return "There is nobody waiting to be served!"
}

function currentLine(){
  var string = "The line is currently:"
  for (var i = 0; i <katzDeliLine.length; i++){
    string = string + ` ${i + 1}. ${katzDeliLine[i]}`

    console.log(string);
  } return string;
}
