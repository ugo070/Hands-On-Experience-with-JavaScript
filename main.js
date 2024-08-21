function calculateLetterGrade(average) {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

function main() {
    let repeat = true;

    while (repeat) {
        let numAssignments;
        
        // Prompt for the number of assignments
        while (true) {
            numAssignments = parseInt(prompt("Enter the number of assignments to grade (maximum 10):"));
            if (Number.isInteger(numAssignments) && numAssignments >= 1 && numAssignments <= 10) {
                break;
            } else {
                alert("Please enter a number between 1 and 10.");
            }
        }

        let totalScore = 0;

        // Gather assignment scores and calculate the average
        for (let i = 0; i < numAssignments; i++) {
            let score;
            while (true) {
                score = parseFloat(prompt(`Enter score for assignment ${i + 1} (as a percentage):`));
                if (Number.isFinite(score) && score >= 0 && score <= 100) {
                    totalScore += score;
                    break;
                } else {
                    alert("Please enter a score between 0 and 100.");
                }
            }
        }

        let average = totalScore / numAssignments;
        let letterGrade = calculateLetterGrade(average);

        // Display results
        alert(`The average score is ${average.toFixed(2)}%`);
        alert(`The letter grade is ${letterGrade}`);

        // Prompt to repeat the program
        let userResponse = prompt("Would you like to enter another set of assignments? (yes/no):").trim().toLowerCase();
        if (userResponse !== 'yes') {
            repeat = false;
        }
    }
}

// Run the main function
main();