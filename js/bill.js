class Bill {
    /*
    nameOfBill - a string variable representing the name of a bill
    dollarValue - dollar value of the bill
    dueDate - date the bill is due (or estimated to be due)
    billRepeats - boolean value, is this a one-time bill or a bill that repeats monthly?
    * */
    constructor(nameOfBill, dollarValue, dueDate, billRepeats) {
        this.nameOfBill = nameOfBill;
        this.dollarValue = dollarValue;
        this.dueDate = dueDate;
        this.billRepeats = billRepeats;
    }

    get dollarValue() {
        return this.dollarValue;
    }

    get dueDate() {
        return this.dueDate;
    }

    get repeatingBill() {
        return this.billRepeats;
    }

    // use cancelRepeatingBill
    // if you've paid off a repeating bill or canceled a repeating bill (i.e: car payment, netflix, etc)

    const cancelRepeatingBill = () => {
        if (this.billRepeats = true) {
            this.billRepeats = false;
            document.write(`<p>${this.nameOfBill} has been canceled.</p>`);
        } else {
            document.write(`<p>${this.nameOfBill} was not a repeating bill. Function aborted.</p>`);
        }
    }

     // use adjustBillPrice if the dollar value of your bill has changed

     const adjustBillPrice = () => {
        let newBillPrice = prompt("Please type the new dollar value of your bill");
        this.dollarValue = parseFloat(newBillPrice);
    }
}

// TODO: swap print/input statements to test code in console