const data = {
    quizzes: [
        {
            topic: 'Loops',
            prerequisiteOfLessonID: ['3'],
            correspondingLessonID: ['5'],
            questions: [
                {
                    id: '1',
                    question: 'Which of the following code strips would NOT result in an infinite loop?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: `while(true){\n\tif(true){\n\t\toutput("1")\n\t}\n}`,
                            correct: false,
                            type: 'code',
                            responseMessage: `Incorrect: The statement 'while(true)' means that at the beginning of each loop, 
                            the condition being checked will always pass. As such, there is nothing to break the loop and this will continue indefinitely. `,
                        },
                        {
                            answerid: '2',
                            answer: `while(false){\n\toutput("1")\n}`,
                            correct: true,
                            type: 'code',
                            responseMessage: `Fantastic! The condition being checked here will always be false. Therefore, not only will this loop not run
                            indefinitely, but it won't even complete a single iteration!`,
                        },
                        {
                            answerid: '3',
                            answer: `for(;;){\n\toutput("1")\n}`,
                            correct: false,
                            type: 'code',
                            responseMessage: `Incorrect: In a for loop, each of the three parts may be omitted for varying use cases. However, if all three are omitted
                            then the resulting loop will be infinite`,
                        },
                    ],
                },
                {
                    id: '2',
                    question: 'Which type of loop ALWAYS results in at least one iteration?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: `while`,
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: a while loop won't complete an iteration unless the condition being checked is true.`,
                        },
                        {
                            answerid: '2',
                            answer: `do While`,
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! The dowhile loop completes an iteration before ever checking the condition!`,
                        },
                        {
                            answerid: '3',
                            answer: `forEach`,
                            correct: false,
                            type: 'texy',
                            responseMessage: `Incorrect: a forEach loop only completes an iteration if it has something to iterate over.`,
                        },
                    ],
                },
            ],
        },
        {
            topic: 'Conditionals',
            prerequisiteOfLessonID: ['3'],
            correspondingLessonID: [],
            questions: [
                {
                    id: '1',
                    question: 'What would be the output of the following pseudocode snippet?',
                    codesnippet: `var num1 = 2;\nvar num2 = 3;\nvar num3 = 9;\n\nif ((num1 < num2) && num3 > 10){\n\toutput 'first'\n} else if (num3 > (num1 + num2)){\n\toutput 'second'\n} else {\n\toutput 'third'\n} `,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'first',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: num3 is assigned the value of 9. This is not larger than 10.`,
                        },
                        {
                            answerid: '2',
                            answer: 'second',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! 9 > (2+3)`,
                        },
                        {
                            answerid: '3',
                            answer: 'third',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: in order to reach the else block, ALL of the prior conditions must be false. This is not the case here.`,
                        },
                    ],
                },
            ],
        },
        //each lesson needs 10 questions... responsibility of the author... score out of 10 on certificate. if < 7, try again...
        {
            topic: 'Recursion',
            prerequisiteOfLessonID: [],
            correspondingLessonID: ['3'],
            questions: [
                {
                    id: '1',
                    question: 'Which of the following best describes the base case?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'A condition that returns a value without making any subsequent recursive calls',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic. Spot on!`,
                        },
                        {
                            answerid: '2',
                            answer: 'The first recursive case',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: A base case ends the recursive function, therefore it doesn't tend to happen straight away.`,
                        },
                        {
                            answerid: '3',
                            answer: 'The final call added to the stack before stack overflow occurs',
                            correct: false,
                            type: 'text',
                            responseMessage:
                                'Incorrect: stack overflow comes as a result of the compiler reaching its call limit. This is not related to a base case.',
                        },
                    ],
                },
                {
                    id: '2',
                    question:
                        'Recursive is always faster than the equivalent iterative approach. Is this statement true?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'True',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: Recursion can be faster but is not always.`,
                        },
                        {
                            answerid: '2',
                            answer: 'False',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! You're spot on!`,
                        },
                    ],
                },
                {
                    id: '3',
                    question: 'Which of the following best describes the base case?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'A condition that returns a value without making any subsequent recursive calls',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic. Spot on!`,
                        },
                        {
                            answerid: '2',
                            answer: 'The first recursive case',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: A base case ends the recursive function, therefore it doesn't tend to happen straight away.`,
                        },
                        {
                            answerid: '3',
                            answer: 'The final call added to the stack before stack overflow occurs',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: stack overflow comes as a result of the compiler reaching its call limit. This is not related to a base case.`,
                        },
                    ],
                },
                {
                    id: '4',
                    question:
                        'Recursive is always faster than the equivalent iterative approach. Is this statement true?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'True',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: Recursion can be faster but is not always.`,
                        },
                        {
                            answerid: '2',
                            answer: 'False',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! You're spot on!`,
                        },
                    ],
                },
                {
                    id: '5',
                    question: 'Which of the following best describes the base case?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'A condition that returns a value without making any subsequent recursive calls',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic. Spot on!`,
                        },
                        {
                            answerid: '2',
                            answer: 'The first recursive case',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: A base case ends the recursive function, therefore it doesn't tend to happen straight away.`,
                        },
                        {
                            answerid: '3',
                            answer: 'The final call added to the stack before stack overflow occurs',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: stack overflow comes as a result of the compiler reaching its call limit. This is not related to a base case.`,
                        },
                    ],
                },
                {
                    id: '6',
                    question:
                        'Recursive is always faster than the equivalent iterative approach. Is this statement true?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'True',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: Recursion can be faster but is not always.`,
                        },
                        {
                            answerid: '2',
                            answer: 'False',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! You're spot on!`,
                        },
                    ],
                },
                {
                    id: '7',
                    question: 'Which of the following best describes the base case?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'A condition that returns a value without making any subsequent recursive calls',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic. Spot on!`,
                        },
                        {
                            answerid: '2',
                            answer: 'The first recursive case',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: A base case ends the recursive function, therefore it doesn't tend to happen straight away.`,
                        },
                        {
                            answerid: '3',
                            answer: 'The final call added to the stack before stack overflow occurs',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: stack overflow comes as a result of the compiler reaching its call limit. This is not related to a base case.`,
                        },
                    ],
                },
                {
                    id: '8',
                    question:
                        'Recursive is always faster than the equivalent iterative approach. Is this statement true?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'True',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: Recursion can be faster but is not always.`,
                        },
                        {
                            answerid: '2',
                            answer: 'False',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! You're spot on!`,
                        },
                    ],
                },
                {
                    id: '9',
                    question: 'Which of the following best describes the base case?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'A condition that returns a value without making any subsequent recursive calls',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic. Spot on!`,
                        },
                        {
                            answerid: '2',
                            answer: 'The first recursive case',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: A base case ends the recursive function, therefore it doesn't tend to happen straight away.`,
                        },
                        {
                            answerid: '3',
                            answer: 'The final call added to the stack before stack overflow occurs',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: stack overflow comes as a result of the compiler reaching its call limit. This is not related to a base case.`,
                        },
                    ],
                },
                {
                    id: '10',
                    question:
                        'Recursive is always faster than the equivalent iterative approach. Is this statement true?',
                    codesnippet: null,
                    answers: [
                        {
                            answerid: '1',
                            answer: 'True',
                            correct: false,
                            type: 'text',
                            responseMessage: `Incorrect: Recursion can be faster but is not always.`,
                        },
                        {
                            answerid: '2',
                            answer: 'False',
                            correct: true,
                            type: 'text',
                            responseMessage: `Fantastic! You're spot on!`,
                        },
                    ],
                },
            ],
        },
    ],
};
export default data;
