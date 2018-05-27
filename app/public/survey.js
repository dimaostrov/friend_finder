let formData = new FormData(document.querySelector('form'));
    console.log(formData);
    const submitBtn = document.getElementById('submit');
    let survey = document.getElementById('questions');
    const sendDataToAPI = () => {
      formData.append()
    }

    const questions = ['tobacco', 'alcohol', 'marijuana', 'crystal meth', 'Stalin', 'Vegemite', 'Footbal, not egg ball', 'Pabst', 'IPA', 'jenkem']

    const generateRadioQuestion = (q, i) => {
      return `<div class="f3">On a scale of 1 to 5 how do you feel about ${q}</div>
      <div class="flex justify-between mt3">
        <div>
          <input type="radio" name="q${i}" value="1" required>1
        </div>
        <div>
          <input type="radio" name="q${i}" value="2" checked>2
        </div>
        <div>
          <input type="radio" name="q${i}" value="3">3
        </div>
        <div>
          <input type="radio" name="q${i}" value="4">4
        </div>
        <div>
          <input type="radio" name="q${i}" value="5">5
        </div>
      </div>
      <hr>`
    };

    const renderedQs = questions.map((x, i) => generateRadioQuestion(x, i)).join('');
    survey.innerHTML = renderedQs;

    var modal = document.querySelector(".modal");
    const modalContent = document.querySelector('.modal-content');
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
      let buddy = document.createElement('div');
      let userInfo;
      fetch('/api/friends')
        .then(res => res.json())
        .then(data => userInfo = data)
        .then(() => console.log(JSON.stringify(userInfo[0])));
      console.log(userInfo)
      buddy.innerHTML = `<div>hi</div>`
      modalContent.appendChild(buddy);  
      modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            window.location.href = '../'
        }
    }

    function validateAndOpenModal() {
      return validateForm() && toggleModal();
    }

    function validateForm() {
      const formName = document.getElementById('name');
      const formPhoto = document.getElementById('photo');
      return formName.value && formPhoto.value;
    }

    submitBtn.addEventListener("click", validateAndOpenModal);
    closeButton.addEventListener("click", () => window.location.href = '../');
    window.addEventListener("click", windowOnClick);