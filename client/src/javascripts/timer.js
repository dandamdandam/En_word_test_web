/**
 * ====================== CLOCK ========================
 * 참고: https://github.com/bedimcode/responsive-clock-ui
 */

const clock = (hour, minute, second) =>{
    let date = new Date()

    let hh = date.getHours() * 30+180,
        mm = date.getMinutes() * 6+180,
        ss = date.getSeconds() * 6+180
        
    // We add a rotation to the elements
    hour.current.style.transform = `rotateZ(${hh + (mm-180)/ 12}deg)`
    minute.current.style.transform = `rotateZ(${mm}deg)`
    second.current.style.transform = `rotateZ(${ss}deg)`
}
export default clock;