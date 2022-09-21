function saturdayFun(Activity="roller-skate") {
	return `This Saturday, I want to ${Activity}!`
	}

function mondayWork(Activity="go to the office") {
	return `This Monday, I will ${Activity}.`
	}

function wrapAdjective(flair ='*', adj){
	let wrappedSentence = function (adj = 'special'){
	return `You are ${flair}${adj}${flair}!`
	}
	return wrappedSentence;
	}