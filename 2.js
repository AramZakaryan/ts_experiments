const whatCentury = (y) => {
    // const c = Math.ceil(y / 100).toString();
    const c = y
    const v = {0: 'th', 1: "st", 2: "nd", 3: "rd"}
    let suffix
    if (c === 1 && c !== 11) {
        suffix = 'st'
    } else if (c === 2 && c !== 12) {
        suffix = 'nd'
    } else if (c === 3 && c !== 13) {
        suffix = 'nd'
    }

        return {c, suffix}

    }


    console.log(
        whatCentury(1),
        // whatCentury(1999) // "20th"
        // , whatCentury(2011) // "21st"
        // , whatCentury(2154) // "22nd"
        // , whatCentury(2259) // "23rd"
        // , whatCentury(1124) // "12th"
        // , whatCentury(2000) // "20th"
    )