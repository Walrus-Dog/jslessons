/*
    Dad joke generator

    Make a program that generates random dad jokes

    Psudo

        SET jokes
                question
                answer

        SET joke FROM jokes

        DISPLAY message
        OUTPUT message
*/

// var jokes = [
//     ["Where do boats go when they're sick?", "To the boat doc."
//     ],
//     ["Why couldn't the bicycle stand up by itself?", "It was two tired."
//     ],
//     ["What did one hat say to the other?", "Stay here! I'm going on ahead."
//     ],
//     ["How does a penguin build its house?", "Igloos it together."
//     ],
//     ["Where do boats go when they're sick?", "To the boat doc."
//     ],
//     ["I don't know but the flag is a big plus"
//     ],
//     ["NO, I got them al cut"]
// ];

// var idx = Math.floor(Math.random() * jokes.length);

// var joke = jokes[idx];

// var message = `${joke[0]} ${joke[1]}`;

// console.log(message);

// //Bonus

// //If the joke only has a punchline, display punchline

// for (var i = 0; i < jokes.length; i++) {
//     console.log(`Here's your sign, ${jokes[i][0]}`)
// }

var jokes = [
    ["Yo mama's so fat", "I swerved to miss her in my car and ran out of gas."
    ],
    ["Yo mama's so stupid", ", when they said, \"Order in the court,\" she asked for fries and a shake."
    ],
    ["Yo mama's so ugly,", "when she was little, she had to trick-or-treat by phone."
    ],
    ["Yo mama so short,", "she went to see Santa and he told her to get back to work."
    ],
    ["Yo mama's so nasty,", "they used to call them jumpolines 'til yo mama bounced on one."],
    ["she went to see Santa and he told her to get back to work."],
    ["she went to the eye doctor to get an iPhone."],
    ["she stuck her nose out the window and let the wind blow it."]
];

var idx = Math.floor(Math.random() * jokes.length)

var jokeMessage = `${jokes[1]}`;

if (jokes[idx].length === 1) {
    console.log(`There is no question. Punchline: ${jokes[idx][0]}`)
} else {
    console.log(jokeMessage)
};
