let result = [];





const conversiones = {
    1: [`a`, `.-`],
    2: [`b`, `'...`],
    3: [`c`, `-.-.`],
    4: [`d`, `-..`],
    5: [`e`, `.`],
    6: [`f`, `..-.`],
    7: [`g`, `--.`],
    8: [`h`, `....`],
    9: [`i`, `..`],
    10: [`j`, `.---`],
    11: [`k`, `-.-`],
    12: [`l`, `.-..`],
    13: [`m`, `--`],
    14: [`n`, `-.`],
    15: [`ñ`, `--.--`],
    16: [`o`, `---`],
    17: [`p`, `.--.`],
    18: [`q`, `--.-`],
    19: [`r`, `.-.`],
    20: [`s`, `...`],
    21: [`t`, `-`],
    22: [`u`, `..-`],
    23: [`v`, `...-`],
    24: [`w`, `.--`],
    25: [`x`, `-..-`],
    26: [`y`, `-.--`],
    27: [`z`, `--..`],
    28: [`1`, `.----`],
    29: [`2`, `..---`],
    30: [`3`, `...--`],
    31: [`4`, `....-`],
    32: [`5`, `.....`],
    33: [`6`, `-....`],
    34: [`7`, `--...`],
    35: [`8`, `---..`],
    36: [`9`, `----.`],
    37: [`0`, `-----`],
}


const TransformToMorseCode = (text) => {
    for (let letter of text.toLowerCase()) {
        for (let i = 1; i < 38; i++) {
            if (letter == conversiones[i][0]) {
                result.push(conversiones[i][1]);
                break
            }
        }
    }
}

const transformToNorm = (text) => {
    let morseCode = [];
    let intanceLetter = ``;
    text += ` `;
    for (let letter of text) {
        if (letter == ` `) {
            morseCode.push(intanceLetter)
            intanceLetter = ``;
        }
        else {
            intanceLetter += letter;
        }
    }
    for (let letter of morseCode) {
        for (let i = 1; i < 38; i++) {
            if (letter == conversiones[i][1]) {
                result.push(conversiones[i][0]);
                break
            }
        }
    }
}
