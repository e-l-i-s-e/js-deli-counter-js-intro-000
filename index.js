var katzDeliLine = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length + 1} in line.`
}

function nowServing(){
 if(katzDeliLine.length > 0){
   var name = katzDeliLine[0];
   katzDeliLine.shift();
   return name;
 }
return "There is nobody waiting to be served!"
}
