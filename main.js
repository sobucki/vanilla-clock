window.addEventListener("load", (event) => {
  //   const now = new Date();
  //   const hours = document.querySelector(".hours");
  //   hours.style.transform = `rotate(${now.getHours() * 15}deg)`;

  //   const minutes = document.querySelector(".minutes");
  //   minutes.style.transform = `rotate(${now.getMinutes() * 6}deg)`;

  //   const seconds = document.querySelector(".seconds");
  //   seconds.style.transform = `rotate(${now.getSeconds() * 6}deg)`;

  const updatePointers = () => {
    const now = new Date();
    console.log(now.getHours());
    const clock = document.querySelector(".clock");
    const hours = clock.querySelector(".hours");

    hours.style.transform = `rotate(${now.getHours() * 30}deg)`;

    const minutes = clock.querySelector(".minutes");
    minutes.style.transform = `rotate(${now.getMinutes() * 6}deg)`;

    const seconds = clock.querySelector(".seconds");
    seconds.style.transform = `rotate(${now.getSeconds() * 6}deg)`;

    const timer = document.querySelector(".timer");
    const digitalHours = timer.querySelector(".hours");
    digitalHours.innerHTML = `${now.getHours()}`.padStart(2, "0");
    const digitalMinutes = timer.querySelector(".minutes");
    digitalMinutes.innerHTML = `${now.getMinutes()}`.padStart(2, "0");
    const digitalSeconds = timer.querySelector(".seconds");
    digitalSeconds.innerHTML = `${now.getSeconds()}`.padStart(2, "0");
  };

  setInterval(updatePointers, 1000);
});
