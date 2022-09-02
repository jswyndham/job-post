//Button control
const jobPostBtn = document.getElementById('job-post-btn');
const closeModalBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('modal-form');
const jobSubmitBtn = document.getElementById('job-submit-btn');
const overlay = document.getElementById('overlay');
const inputs = document.querySelectorAll('input');

//Form input values
const jobPostForm = document.getElementById('job-post-form');
const companyName = document.getElementById('company-name').value;
const jobTitle = document.getElementById('job-title').value;
const jobSalary = document.getElementById('job-salary').value;
const jobLocation = document.getElementById('job-location').value;
const onlineStatus = document.querySelector('input[name="online-onsite"]:checked').value;
const applicationStartDate = document.getElementById('application-period-start').value;
const applicationEndDate = document.getElementById('application-period-end').value;
const jobDescription = document.getElementById('job-description').value;

//Job Class: Represents the job position.
class JobPost {
  constructor(company, jobPosition, location, jobStatus, salary, applicationStartDate, applicationEndDate, jobDescription) {
    this.company = company;
    this.jobPosition = jobPosition;
    this.location = location;
    this.jobStatus = jobStatus;
    this.salary = salary;
    this.applicationStartDate = applicationStartDate;
    this.applicationEndDate = applicationEndDate;
    this.jobDescription = jobDescription;
  }
}

//UI Class to handle UI tasks
class UI {
  static displayPostedJobs() {
    const StoredPosting = [
      {
        company: 'Google',
        jobPosition: 'UI/UX Designer',
        location: 'Sydney',
        jobStatus: 'online',
        salary: '$120,000',
        applicationStartDate: '09/10/2022',
        applicationEndDate: '10/10/2022',
        jobDescription: 'This is a famous company.'
      }
    ];
    const jobs = StoredPosting;

    jobs.forEach((job)=> UI.addJobToList(job));
  }

  static addJobToList(job) { 
    const list = document.querySelector('#job-table-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${job.company}</td>
    <td>${job.jobPosition}</td>
    <td>${job.location}</td>
    <td>${job.jobStatus}</td>
    <td>${job.salary}</td>
    <td>${job.applicationStartDate}</td>
    <td>${job.applicationEndDate}</td>
    <td>${job.jobDescription}</td>
    <td>
      <a href='#'>
        <button type="button" 
        class="
        inline-block 
        px-4 
        py-2 
        bg-red-600 
        text-white 
        font-bold 
        text-md 
        leading-tight 
        uppercase 
        rounded-md 
        shadow-md 
        hover:bg-red-700 
        hover:shadow-lg 
        focus:bg-red-700 
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:bg-red-800 
        active:shadow-lg 
        transition 
        duration-150 
        ease-in-out
        ">
        x</button></a></td>
    `;

    list.appendChild(row);
  }
}

//Event: Display Jobs
document.addEventListener('DOMContentLoaded', UI.displayPostedJobs);

//Event: Add new job to the list
jobPostForm.addEventListener('submit', (e)=> {
  e.preventDefault();

    //Get form values
    const company = document.getElementById('company-name').value; 
    const jobPosition = document.getElementById('job-title').value;
    const location = document.getElementById('job-location').value; 
    const jobStatus = document.querySelector('input[name="online-onsite"]:checked').value;
    const salary = document.getElementById('job-salary').value; 
    const applicationStartDate = document.getElementById('application-period-start').value; 
    const applicationEndDate = document.getElementById('application-period-end').value;
    const jobDescription = document.getElementById('job-description').value;
  
    //Instantiate the job object
    const job = new JobPost(company, jobPosition, location, jobStatus, salary, applicationStartDate, applicationEndDate, jobDescription);

    console.log(job);


  jobPostForm.reset()
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});



//Button to open new job post.
jobPostBtn.addEventListener('click', () => {
  modalForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
}) 

//Press overlay background to close modal... Currently not supported.
overlay.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
  modalForm.classList.add('hidden');
  overlay.classList.remove('hidden');
  })

//Button to close and reset the input fields of the form modal.
closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  jobPostForm.reset()
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

