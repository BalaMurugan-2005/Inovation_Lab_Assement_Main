function generateStudentInputs() {
  const count = parseInt(document.getElementById('studentCount').value);
  const container = document.getElementById('studentInputs');
  container.innerHTML = ''; // Clear previous inputs
  if (isNaN(count) || count < 1) return;

  document.getElementById('studentForm').style.display = 'block';

  for (let i = 1; i <= count; i++) {
    container.innerHTML += `
      <div>
        <h3>Student ${i}</h3>
        <input type="text" placeholder="Enter Name" id="name${i}" required>
        <input type="number" placeholder="Enter Marks (0-100)" id="marks${i}" min="0" max="100" required>
      </div>
    `;
  }
}

document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const count = parseInt(document.getElementById('studentCount').value);
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<h2> Results</h2>';

  for (let i = 1; i <= count; i++) {
    // Use simple IDs instead of name attributes
    const nameInput = document.getElementById('name' + i);
    const marksInput = document.getElementById('marks' + i);

    const name = nameInput.value;
    const marks = parseFloat(marksInput.value);

    let grade = '';
    let message = '';

    if (marks >= 90) grade = 'A+';
    else if (marks >= 75) grade = 'A';
    else if (marks >= 60) grade = 'B';
    else if (marks >= 45) grade = 'C';
    else grade = 'F';

    if (grade === 'F') {
      message = '<p class="result-fail"> Sorry ' + name + ', you have failed. Grade: ' + grade + '</p>';
    } else {
      message = '<p class="result-pass"> Congrats ' + name + '! You passed with Grade: ' + grade + '</p>';
    }

    resultsDiv.innerHTML += message;
  }
});
