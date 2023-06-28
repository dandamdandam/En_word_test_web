/**
 * ====================== CLOCK ========================
 * 참고: https://github.com/bedimcode/responsive-clock-ui
 */

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30+180,
        mm = date.getMinutes() * 6+180,
        ss = date.getSeconds() * 6+180
        
    // We add a rotation to the elements
    document.getElementById('clock__hour').style.transform = `rotateZ(${hh + (mm-180)/ 12}deg)`
    document.getElementById('clock__minutes').style.transform = `rotateZ(${mm}deg)`
    document.getElementById('clock__seconds').style.transform = `rotateZ(${ss}deg)`
}
export default clock;