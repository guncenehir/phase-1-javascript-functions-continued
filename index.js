// code your solution here
/*
const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
};
mondayWork("work from home");
*/

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*"){
  return function(word="special"){
    return `You are ${flair}${word}${flair}!`;
  };
}
const encouragingFunction= wrapAdjective("!!!");




