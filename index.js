/**
 * first2char 
 * Return first 2 character of a given string.
 */
const first2Char = (string) => {
    let stringValue = string.toString();
    let temp = stringValue.substring(0,2);

    return temp;
}

/**
 * last2char 
 * Return last 2 character of a given string.
 */
const last2Char = (string) => {
    let stringValue = string.toString();
    let temp = stringValue.substring(2,4);

    return temp;
}

/**
 * generateCardNumber
 * This function takes data and data serial no as input
 * and generates card number according to the given input 
 * data and return it as an string.
 */
const generateCardNumber = (data, serial) => {
    let tempCard = "";

    tempCard += first2Char(data.district).toUpperCase();
    tempCard += last2Char(data.currentYear);
    tempCard += first2Char(data.postNo);
    tempCard += data.birthYear;
    tempCard += (serial.toString()).padStart(6, '0');

    // console.log(serial, " ", tempCard)

    return tempCard;
}

// Sort 
const sorter = (data) => {
    let tempVariable = [];

    // Generating 2D array with necessery data points.
    // Using card number as unique key.
    data.forEach(d => {
        tempVariable.push([d.cardNumber, d.priority]);
    })

    // console.log('Initial: ', tempVariable)

    // Sorting data records in the 'tempVariable' variable.
    // Comparing their priority range and positioning them.
    tempVariable.sort((a, b) => {
        return a[1]-b[1];
    })

    // console.log('Final: ', tempVariable)

    return tempVariable;
}

const cardDistribution = (d) => {
    let results = [];

    // If there is no data in the array.
    // if (d.length > 0) return;

    // Return error if data is not object.
    // if (typeof d === "object") return;

    // Returns error when given array object doesn't fulfill specific object keys.
    d.forEach( (v, i) => {
        let item = {}

        // Generating Card Number
        item.cardNumber = generateCardNumber(v, i+1);
        
        // Generating Gift
        let lastChar = item?.cardNumber.charAt(item?.cardNumber.length - 1);
        if (parseInt(lastChar) % 2 === 0) {
            item.gift = "R";
        } else {
            item.gift = "W";
        }

        item.priority = v.priority;
        
        // Adding generated item in the result stack.
        results.push(item);
    });


    let finalData = sorter(results);

    // console.log(d)
    return finalData;
}


// Input Data
const inputData = [
    { name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2 },
    { name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1 },
    { name: "Abu Taher Muhammad", birthYear: 1999, currentYear: 2022, district: "Sylhet", postNo: 3100, priority: 1 }
];

const finalResult = [
    { cardNumber: 'RA22321995000002', gift: 'R', priority: 1},
    { cardNumber: 'DH22121999000001', gift: 'W', priority: 2}
];


// cardDistribution(inputData)
// console.log(cardDistribution(inputData));