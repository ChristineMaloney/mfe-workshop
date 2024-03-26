type Transaction = {description: string, amount: number, date: Date};

const transactions : Transaction[] = [];

const updateDisplay = () => {
    const description = document.getElementById('description') as HTMLInputElement;
    const amount = document.getElementById('amount') as HTMLInputElement;
    const transactionsArea = document.getElementById('transactions') as HTMLDivElement;
    const balanceArea = document.getElementById('balance') as HTMLSpanElement;

    let output : string = "<ul>"
    for (let i : number = 0; i < transactions.length; i++) {
        output+= `<li>${transactions[i].date} ${transactions[i].description} ${transactions[i].amount} </li>`
    }
    output += "<ul>";
    transactionsArea.innerHTML = output;

    // const lis = transactions.map(transaction => {
    //     return `<li>${transaction.date} ${transaction.description} ${transaction.amount} </li>`;
    // });
    // transactionsArea.innerHTML = "<ul>" + lis.join('') + "</ul>";    

    let total : number = 0;
    for (let i : number = 0; i < transactions.length; i++) {
        total += transactions[i].amount;
    }

    balanceArea.innerText = `${total}`;

    // balanceArea.innerText = transactions.reduce((total, transaction) => 
    //     total + transaction.amount, 0).toString();
    // description.value = "";
    // amount.value = "0";
}

const newTransaction = () => {

    const description = document.getElementById('description') as HTMLInputElement;
    const amount = document.getElementById('amount') as HTMLInputElement;

    const transaction : Transaction = {description : description.value, amount :+amount.value, date : new Date()};
    transactions.push(transaction);
    updateDisplay();
}

