let pin_to_crack;
document.getElementById("crack_submit").addEventListener("click", function() {
    const d = new Date()
    const time = d.getTime()
    pin_to_crack = String(document.getElementById("crack_input").value)
    for(let i = 0; i < 100000000; i++) {
        let strI = String(i)
        if(strI.length == 1) {
            let word = "000"
            word += strI
            if(pin_to_crack == word) {
                const nowd = new Date()
                let found_time = nowd.getTime() - time
                alert("it took me " + found_time + " millisecond(s) to crack this PIN")
            }
        }
        else if(strI.length == 2) {
            let word = "00"
            word += strI
            if(pin_to_crack == word) {
                const nowd = new Date()
                let found_time = nowd.getTime() - time
                alert("it took me " + found_time + " millisecond(s) to crack this PIN")
            }
        }
        else if(strI.length == 3) {
            let word = "0"
            word += strI
            if(pin_to_crack == word) {
                const nowd = new Date()
                let found_time = nowd.getTime() - time
                alert("it took me " + found_time + " millisecond(s) to crack this PIN")
            }
        }
        else {
            if(pin_to_crack == strI) {
                const nowd = new Date()
                let found_time = nowd.getTime() - time
                alert("it took me " + found_time + " millisecond(s) to crack this PIN")
            }
        }
    }
})