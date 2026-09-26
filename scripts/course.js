const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }

    
]

const courseDetails = document.querySelector('dialog');

function cards (courses){ // It has "courses" as a parameter so the other pasts of the function can reuse the complete array (such as the filter and reduce methods,
    // and the three buttons)   
    const container = document.getElementById('cards');

    // clean the container
    container.innerHTML = "";

    let text = "";
    // Receive the array as a parameter so that the filters can reuse
    // the same function with a shorter array
    courses.forEach(course => {
        // Decide if the cards would receive another class according to the property "completed" of each course.
        // If the course is not completed, should have an empty string because anything changes.
        let card = `<p class="card ${course.completed ? "completed" : ""}">${course.subject} ${course.number} ${course.completed ? ' <span class="check">&#10003</span>' : ""}</p>`;
        text += card;               
    });

    // Used the reduce method to return only one value, the total of credits. A filter would return a new array.
    // The 0 at the end is the initial value that will be accumulated.
    // acc = accumulator
    const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('total-credits').textContent = `The total credits for courses listed above is ${totalCredits}`;

    container.innerHTML = text;
    container.querySelectorAll('.card').forEach((cardElement, i) => {
        cardElement.addEventListener('click', () => {
            displayCourseDetails(courses[i]);
        })
    });

}
cards(courses);

// Create a const for each of the cards bottom and select each of them
const allButton = document.querySelector('.all-btn');
const cseButton = document.querySelector('.cse-btn');
const wddButton = document.querySelector('.wdd-btn');

allButton.addEventListener('click', () => {
    cards(courses);
});
cseButton.addEventListener('click', () => {
    const course = courses.filter(course => course.subject === "CSE");
    cards(course);
});
wddButton.addEventListener('click', () => {
    const course = courses.filter(course => course.subject === "WDD");
    cards(course);
});

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}