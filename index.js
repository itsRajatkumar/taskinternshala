  const idatelist = document.getElementById('issued__date--list');
  const edatelist = document.getElementById('expired__date--list');
  const prevBtns = document.querySelectorAll(".back__btn");
  const formSteps = document.querySelectorAll(".form__page");
  const next__move = document.querySelectorAll('.last__element');
  constbnext__move_list = document.querySelectorAll('.last__element--list')
  const citylist = document.getElementById("citylist")
  const select__city = document.getElementById("select__city");

  //populating years in drop-down list
  let cYear = new Date().getFullYear();
  let syear = 2000;
  while (cYear >= syear) {
      let year__option1 = document.createElement('option');
      year__option1.text = cYear;
      year__option1.value = cYear;
      idatelist.add(year__option1);
      cYear -= 1;
  }
  expired__year = new Date().getFullYear() + 5;
  while (expired__year >= syear) {

      let year__option2 = document.createElement('option');
      year__option2.text = expired__year;
      year__option2.value = expired__year;
      year__option2.id = 'id' + expired__year;
      edatelist.add(year__option2);
      expired__year -= 1;
  }


  //controlling form page 
  // for back we have a button
  // for next we have last element event listening
  let formStepsNum = 0;

  next__move.forEach((btn) => {
      btn.addEventListener("click", () => {
          formStepsNum++;
          updateFormSteps();
      });
  });

  function movenext() {
      formStepsNum++;
      updateFormSteps();
  };

  prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
          formStepsNum--;
          updateFormSteps();
      });
  });

  function updateFormSteps() {
      formSteps.forEach((formStep) => {
          formStep.classList.contains("form__page--active") &&
              formStep.classList.remove("form__page--active");
      });

      formSteps[formStepsNum].classList.add("form__page--active");
  }


  // updating form filling percentage
  let inputs = document.querySelectorAll('.input')
  let fillarr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  inputs.forEach((input, index) => {
      input.addEventListener('change', () => {
          fillarr[index] = 1;
          console.log(fillarr)
          var sum = 0;
          console.log(fillarr.length);
          for (let i = 0; i < fillarr.length; i++) {
              sum += fillarr[i];
          }
          document.getElementById("percentage").style.width = ((sum / 9) * 100) + '%'
      })

  })
