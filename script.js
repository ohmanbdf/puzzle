function puzzleone(){if (rangeTwo.value == rangeOne.value){rangeTwo.classList.add('aligned');} else{rangeTwo.classList.remove('aligned')} if (rangeThree.value == rangeOne.value){rangeThree.classList.add('aligned')} else{rangeThree.classList.remove('aligned')} if (rangeTwo.classList.contains('aligned')){if(rangeThree.classList.contains('aligned')){finishPuzzleOne.classList.remove('hidden')}}}
rangeTwo.oninput = puzzleone;
rangeThree.oninput = puzzleone;
function fidishFirstPuzzle(){puzzleOne.classList.add('hidden'); puzzleTwo.classList.remove('hidden')}
finishPuzzleOne.onclick = fidishFirstPuzzle;
function one(){stepOne.classList.add('unlocked')}
function two(){if (stepOne.classList.contains('unlocked')){stepTwo.classList.add('unlocked')}}
function three(){if (stepTwo.classList.contains('unlocked')){stepThree.classList.add('unlocked'); finishPuzzleTwo.classList.remove('hidden')}}
stepOne.onclick = one;
stepTwo.onclick = two;
stepThree.onclick = three;
function fidishSecondPuzzle(){puzzleTwo.classList.add('hidden'); puzzleThree.classList.remove('hidden')}
finishPuzzleTwo.onclick = fidishSecondPuzzle;
function complete(){if (finalInput.value == 'one two three'){puzzleThree.classList.add('hidden'); celebration.classList.remove('hidden')}}
finishPuzzleThree.onclick = complete;