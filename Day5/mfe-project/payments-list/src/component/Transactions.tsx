export type TransactionsProps = {serverUrl: string}

const Transactions = (props: TransactionsProps) : JSX.Element => {
    return <p>
        This is the list of transactions
        Requests will go to {props.serverUrl}
        </p>
} 

export default Transactions;