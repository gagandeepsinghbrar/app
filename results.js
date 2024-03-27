const container = document.getElementById('container');
const quizResults = document.getElementById('quizResults');
function formatExamDate(date) {
const today = new Date();
const examDate = new Date(date);

const options = { hour: '2-digit', minute: '2-digit', hour12: true };

// Check if the exam was taken today
if (examDate.toDateString() === today.toDateString()) {
return `Today at ${examDate.toLocaleTimeString('en-US', options)}`;
}

// Check if the exam was taken yesterday
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
if (examDate.toDateString() === yesterday.toDateString()) {
return `Yesterday at ${examDate.toLocaleTimeString('en-US', options)}`;
}

// Return the day of the week if not today or yesterday
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = days[examDate.getDay()];
return `${dayOfWeek}, ${examDate.toLocaleTimeString('en-US', options)}`;
}
async function getResult(e) {
    const id = e.target.dataset.id;
    try {
        const response = await fetch(id);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'quiz_results.pdf');
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error:', error);
    }
    
}

// Fetch quiz results data from the server
fetch('/results')
  .then(response => response.json())
  .then(data => {
    

    // Iterate through the quiz results data and create HTML elements
    data.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.classList.add('result');

      // Format the taken_at timestamp
      const takenAt = formatExamDate(new Date(result.taken_at));

      resultElement.innerHTML = `
        
            <p>Exam taken : ${takenAt}</p> 
            <button data-id="/generate_pdf/${result.id}" class="xx">Exam # ${result.id}</button>
      `;
    
      quizResults.appendChild(resultElement);
    });
    const buttons = document.getElementsByClassName('xx');
    for(var i=0;i
            <buttons.length;i++) {
        buttons[i].addEventListener('click', getResult)
    }
  })
  .catch(error => console.error('Error fetching quiz results:', error));
