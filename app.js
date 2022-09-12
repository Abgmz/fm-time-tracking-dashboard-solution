((d) => {
  const $linkDaily = d.querySelector("[data-daily]");
  const $linkWeekly = d.querySelector("[data-weekly]");
  const $linkMonthly = d.querySelector("[data-monthly]");

  const loadInfo = async () => {
    const API = "data.json";

    try {
      let res = await fetch(API);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      let data = await res.json();

      printDom(data);

      $linkDaily.classList.add("active-link");

      $linkDaily.addEventListener("click", (e) => {
        e.preventDefault();
        $linkDaily.classList.add("active-link");
        $linkWeekly.classList.remove("active-link");
        $linkMonthly.classList.remove("active-link");
        printDom(data, Object.keys($linkDaily.dataset)[0]);
      });

      $linkWeekly.addEventListener("click", (e) => {
        e.preventDefault();
        $linkDaily.classList.remove("active-link");
        $linkWeekly.classList.add("active-link");
        $linkMonthly.classList.remove("active-link");
        printDom(data, Object.keys($linkWeekly.dataset)[0]);
      });

      $linkMonthly.addEventListener("click", (e) => {
        e.preventDefault();
        $linkDaily.classList.remove("active-link");
        $linkWeekly.classList.remove("active-link");
        $linkMonthly.classList.add("active-link");
        printDom(data, Object.keys($linkMonthly.dataset)[0]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const printDom = (data, str = "daily") => {
    const $cardWork = d.querySelector("[data-card-work]");
    const $cardPlay = d.querySelector("[data-card-play]");
    const $cardStudy = d.querySelector("[data-card-study]");
    const $cardExercise = d.querySelector("[data-card-exercise]");
    const $cardSocial = d.querySelector("[data-card-social]");
    const $cardSelfCare = d.querySelector("[data-card-selfcare]");

    const [work, play, study, exercise, social, selfCare] = data;

    $cardWork.querySelector("[data-card-title]").textContent = work.title;
    $cardWork.querySelector("[data-card-current]").textContent = `${
      work.timeframes[`${str}`].current
    }hrs`;

    $cardWork.querySelector("[data-card-prev]").textContent = `Last Week - ${
      work.timeframes[`${str}`].previous
    }hrs`;

    $cardPlay.querySelector("[data-card-title]").textContent = play.title;
    $cardPlay.querySelector("[data-card-current]").textContent = `${
      play.timeframes[`${str}`].current
    }hrs`;
    $cardPlay.querySelector("[data-card-prev]").textContent = `Last Week - ${
      play.timeframes[`${str}`].previous
    }hrs`;

    $cardStudy.querySelector("[data-card-title]").textContent = study.title;
    $cardStudy.querySelector("[data-card-current]").textContent = `${
      study.timeframes[`${str}`].current
    }hrs`;
    $cardStudy.querySelector("[data-card-prev]").textContent = `Last Week - ${
      study.timeframes[`${str}`].previous
    }hrs`;

    $cardExercise.querySelector("[data-card-title]").textContent =
      exercise.title;
    $cardExercise.querySelector("[data-card-current]").textContent = `${
      exercise.timeframes[`${str}`].current
    }hrs`;
    $cardExercise.querySelector(
      "[data-card-prev]"
    ).textContent = `Last Week - ${exercise.timeframes[`${str}`].previous}hrs`;

    $cardSocial.querySelector("[data-card-title]").textContent = social.title;
    $cardSocial.querySelector("[data-card-current]").textContent = `${
      social.timeframes[`${str}`].current
    }hrs`;
    $cardSocial.querySelector("[data-card-prev]").textContent = `Last Week - ${
      social.timeframes[`${str}`].previous
    }hrs`;

    $cardSelfCare.querySelector("[data-card-title]").textContent =
      selfCare.title;
    $cardSelfCare.querySelector("[data-card-current]").textContent = `${
      selfCare.timeframes[`${str}`].current
    }hrs`;
    $cardSelfCare.querySelector(
      "[data-card-prev]"
    ).textContent = `Last Week - ${selfCare.timeframes[`${str}`].previous}hrs`;
  };

  d.addEventListener("DOMContentLoaded", loadInfo);
})(document);
