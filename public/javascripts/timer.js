/**
 * ====================== CLOCK ========================
 * 참고: https://github.com/bedimcode/responsive-clock-ui
 */
const hour = document.getElementById('clock__hour'),
      minutes = document.getElementById('clock__minutes'),
      seconds = document.getElementById('clock__seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30+180,
        mm = date.getMinutes() * 6+180,
        ss = date.getSeconds() * 6+180
        
    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + (mm-180)/ 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s