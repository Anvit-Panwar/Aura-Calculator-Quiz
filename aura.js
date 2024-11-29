// Full list of questions
const questions = [
    {
        question: "What would you bring to a deserted island?",
        options: [
            { text: "A book", points: 50, message: "If a bear would hunt you, would you hit him with book!" },
            { text: "A knife", points: 10000, message: "Smart choice! A knife is essential for survival." },
            { text: "Wi-Fi", points: 0, message: "Wi-Fi is cool, but you are fool!, are you sure there’s signal there?" },
            { text: "Girlfriend", points: 9100000, message: "Do you really have girlfriend!!!?"}
        ],
        correctOption: 3,
    },
    {
        question: "Your life gets a theme song. What would it be?",
        options: [
            { text: "Bhojpuri", points: 9999999, message: "Bhojpuri song reflect your amazing music sense!" },
            { text: "phonk", points: 500000, message: "a sigma person who listen phonk has a nice Aura, but bhijpuri songs are of different level." },
            { text: "Pop", points: 200000, message: "Pop shows your vibrant and lively energy!" },
            { text: "Classical", points: 500000, message: "Classical reflects a calm and thoughtful vibe." },
        ],
        correctOption: 0,
    },
    {
        question: "How do you spend your Sunday mornings?",
        options: [
            { text: "Sleeping in", points: 200000, message: "sleep makes you fresh and energetic..." },
            { text: "Scrolling endlessly", points: 10, message: "LOL, are you serious!" },
            { text: "Working out", points: 6999999, message: "you have a different Aura!" },
            { text: "going out for a date", points: 100000, message: "Its fine, but invest in you self development..." },
        ],
        correctOption: 2,
    },
    {
        question: "If you get a chance to time travel, what would you do?",
        options: [
            { text: "become a savior, using present gadgets", points: 500000, message: "becoming a hero is onetime offer!" },
            { text: "protect India from britishers", points: 8800000, message: "protecting your country creates an infinite aura." },
            { text: "become a myth, and let present archeologists scratch their head", points: 200000, message: "become mysterious..." },
            { text: "re-invent present technologies", points: 10, message: "want to steal someones lifetime hardwork!" },
        ],
        correctOption: 1,
    },
    {
        question: "You’re at a party, but you don’t know anyone",
        options: [
            { text: "Stick to your phone", points: 25, message: "its shamefull!" },
            { text: "invade a group, and start showing your dance moves", points: 19999, message: "its not cool, until you do a moonwalk..." },
            { text: "Impress girls", points: 1000, message: "bro leave these kind of things" },
            { text: "Hunt for snacks", points: 6699999, message: "you have a different Aura!!" },
        ],
        correctOption: 3,
    },
    {
        question: "An unknown beautiful girl is waving hand towards you, what would you do?",
        options: [
            { text: "I will wave back", points: 10, message: "lmao, she was waving toward someone else" },
            { text: "Ignore", points: 20, message: "you lost a chance to make girlfriend" },
            { text: "I will act like having a heart attack", points: 50, message: "OMG, you will become shamefully famous." },
            { text: "I will not wave back,I will look at her and wait until she reaches to me", points: 7900000, message: "Thats what a valuable person do..." },
        ],
        correctOption: 3,
    },
    {
        question: "A boy is trying to impress your girlfriend, and your girlfriend is enjoying it, Who is the BAD person in this situation",
        options: [
            { text: "that boy", points: 100, message: "the boy is wrong, but it is genuine from his perspective." },
            { text: "Me", points: 0, message: "why you chosen this option!" },
            { text: "My girlfriend", points: 7999999, message: "Absolutely correct! the boy saved your life from a big threat, now breakup and remember your self-respect" },
        ],
        correctOption: 2,
    },
    {
        question: "You and your girlfriend are in the same class and your girlfriend is a topper.A new boy joined your class, and topped in exam, and now you girlfriend is flirting on him. What would you do now?",
        options: [
            { text: "I will do the greatest academic comeback and top the exam, and then break-up with her", points: 899999, message: "its time for revenge" },
            { text: "I will break-up", points: 10000, message: "you have to break up, but what about revenge?" },
            { text: "I will fight with the boy", points: 0, message: "what is the fault of that boy?" },
            { text: "I will chill", points: 0, message: "lol" },
        ],
        correctOption: 0,
    },
    {
        question: "You see a ‘Do Not Enter’ sign, what would you do?",
        options: [
            { text: "Obey it", points: 2909, message: "it don't have thrill" },
            { text: "Walk in like you own the place", points: 5999999, message: "it is swag+aura!" },
            { text: "Change the sign", points: 700000, message: "it would be fun" },
            { text: "Enter cautiously", points: 12000, message: "good!" },
        ],
        correctOption: 1,
    },
    {
        question: "Someone sends you a ‘Hi’ text without context, what would you do?",
        options: [
            { text: "respond with hi", points: 99, message: "you are a decent guy..." },
            { text: "Leave it on read,", points: 1000, message: "now you are mysterious evil!" },
            { text: "Block them", points: 100, message: "lol" },
            { text: "Start spamming random weired emojis", points: 9999999, message: "the person could be your family member...!, ha ha ha!" },
        ],
        correctOption: 3,
    },
    // {
    //     question: "",
    //     options: [
    //         { text: "", points: , message: "" },
    //         { text: "", points: , message: "" },
    //         { text: "", points: , message: "" },
    //         { text: "", points: , message: "" },
    //     ],
    //     correctOption: ,
    // },
    {
        question: "If you were given a book with everything you’ve ever said, would you read it, or burn it before someone finds your embarrassing one-liners?",
        options: [
            { text: "read it", points: 38, message: "learn from your mistakes." },
            { text: "burn it", points: 8700000, message: "you have something evil...!" },
            { text: "publish it publicly", points: 560000, message: "it would be fun." },
        ],
        correctOption: 1,
    },
    {
        question: "If someone messages you to offer you $1 million to never use emojis again, would you agree, or would you miss your passive-aggressive 🙃 too much?",
        options: [
            { text: "I will accept", points: 2000, message: "you richy rich..." },
            { text: "no, emojis are my emotions", points: 1000, message: "true emotions..." },
            { text: "I will reply by using strange emojis🙃", points: 5000000, message: "damn, it would be cool!" },
        ],
        correctOption: 2,
    },
    {
        question: "If you could bring one extinct species back to life,which species would you pick?",
        options: [
            { text: "Dinosaurs🦖", points: 9000000, message: "now its time to live in jurrassic park🦖😈" },
            { text: "Dodo", points: 400, message: "dodododododo🤦‍♂️" },
            { text: "passenger pigeon", points: 45, message: "now you can send chitthi by pigeon😉" },
            { text: "Tasmanian Tiger", points: 7000, message: "roar🐯" },
        ],
        correctOption: 0,
    },

]

// Shuffle and select 10 random questions
let selectedQuestions = [];
function selectRandomQuestions() {
    const shuffled = questions.sort(() => Math.random() - 0.5); // Shuffle
    selectedQuestions = shuffled.slice(0, 10); // Pick first 10
}

let currentQuestionIndex = 0;
let totalAuraPoints = 0;

function displayAuraResults() {
    // Display Total Aura Points
    const totalAuraDiv = document.querySelector("#total-aura");
    totalAuraDiv.style.display = "block";
    totalAuraDiv.textContent = `Your Total Aura Points: ${totalAuraPoints}+`;

    // Display Aura Message Based on Score
    const auraMessageDiv = document.querySelector("#aura-message");
    auraMessageDiv.style.display = "block";

    if (totalAuraPoints <= 35000000) {
        auraMessageDiv.textContent = "Your Aura: Poor🤦‍♂️🥲. You might need to work on spreading positive vibes!";
    } else if (totalAuraPoints <= 50000000) {
        auraMessageDiv.textContent = "Your Aura: Average✌️😊. You’re balanced, but there’s room for growth!";
    } else if (totalAuraPoints <= 70000000) {
        auraMessageDiv.textContent = "Your Aura: Good😀😎. You radiate positivity and charm!";
    } else {
        auraMessageDiv.textContent = "Your Aura: Highest😈🙌😏. You're a beacon of light and inspiration!";
    }

    // Hide Next button after final result
    document.querySelector("#next-btn").style.display = "none";
}


// Display the next question
function displayQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        document.querySelector("#question").textContent = "Quiz Complete!";
        document.querySelector("#options").innerHTML = "";
        displayAuraResults();
        return;
    }
    

    const question = selectedQuestions[currentQuestionIndex];
    document.querySelector("#question").textContent = question.question;
    
    const optionsDiv = document.querySelector("#options");
    optionsDiv.innerHTML = ""; // Clear previous options

    // Create buttons for each option
    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.classList.add("option-btn");
        btn.onclick = function () {
            // Disable all buttons after one is clicked
            const allButtons = document.querySelectorAll(".option-btn");
            allButtons.forEach(b => b.disabled = true);

            if (index === question.correctOption) {
                btn.style.backgroundColor = "#34A853"; // Correct option
                btn.style.color = "white";
            } else {
                btn.style.backgroundColor = "#EA4335"; // Incorrect option
                btn.style.color = "white";
                // Highlight the correct answer
                allButtons[question.correctOption].style.backgroundColor = "#34A853";
                allButtons[question.correctOption].style.color = "white";
            }

            // Add aura points for the selected option
            const auraIncrement = option.points;
            totalAuraPoints += auraIncrement;

            // Show result message with increment
            document.querySelector("#result").textContent = `${option.message} (+${auraIncrement} aura points)`;
            document.querySelector("#next-btn").style.display = "block"; // Show next button
        };
        optionsDiv.appendChild(btn);
    });
}

// Move to the next question after clicking "Next Question"
document.querySelector("#next-btn").addEventListener("click", function () {
    currentQuestionIndex++;
    document.querySelector("#result").textContent = ""; // Clear result text
    document.querySelector("#next-btn").style.display = "none"; // Hide next button until answer is chosen
    displayQuestion(); // Show next question
});

// Initial setup
selectRandomQuestions();
displayQuestion();
