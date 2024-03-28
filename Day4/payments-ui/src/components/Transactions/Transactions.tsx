import { ChangeEvent, useEffect, useState } from 'react';
import { PaymentType, getAllPayments, getCountries, getPaymentsFromServer, getPaymentsFromServerByCountry } from '../../data/DataFunctions';
import PaymentTableRow from './PaymentTableRow';
import './Transactions.css';
import { AxiosResponse } from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Transactions = (): JSX.Element => {

    const [params, setParams ]= useSearchParams();
    console.log(params.get("country"))
    const urlCountry = (params.get("country"))

   // const payments = getAllPayments();
    // getPaymentsFromServer();
    // getPaymentsFromServerByCountry("usa");

    const [countries, setCountries] = useState<string[]>([]);
        //why uniqueCountries[0]
    const [selectedCountry, setSelectedCountry] = useState<string>(urlCountry? urlCountry: "")
    const [payments, setPayments] = useState<PaymentType[]>([]);


    //array defines when to execute the code
    //empty array run once and once only
    useEffect(() => {
        const countriesPromise : Promise<AxiosResponse<string[]>> = getCountries();
    
        // const countries: string[] = payments.map((payment) => payment.country);
        countriesPromise.then (result => {
            if (result.status === 200){
            setCountries(result.data)
            } else {
                console.log("somethin' went wrong")
            }
            console.log(result.data)
        }).catch (error => console.log(error))
    },[]);
    
    //const uniqueCountries : string[] = countries.filter((country, index) => countries.indexOf(country) === index);
    //why use new Set?  this line is taking the Array and getting the unique values.  Set can't have duplicates
    //const uniqueCountries: string[] = Array.from(new Set(countries));

    const countryOptions: JSX.Element[] = countries.map(c => <option key={c} value={c}>{c}</option>);

    const navigate = useNavigate();

    
    const changeCountry = (e : ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.value;
        setSelectedCountry(option);
        navigate("/find?country=" + option)
    }

    const countrySelector: JSX.Element = <select id="countrySelector" onChange={changeCountry}>
        <option value="">--Select--</option>
        {countryOptions}
    </select>;

    //this block loads the transactions everytime the country changes
    useEffect(() => {
    const paymentsPromise : Promise<AxiosResponse<PaymentType[]>> = getPaymentsFromServerByCountry(selectedCountry);

    // const countries: string[] = payments.map((payment) => payment.country);
    paymentsPromise.then (result => {
        setPayments(result.data)
        } )
    },[selectedCountry]);

    return (<>

        {countries.length === 0 && <p>Please wait ... loading</p>}
        <div className="transactionsCountrySelector">
            Select country: {countrySelector}
        </div>
        <table className="transactionsTable">
            <thead>
                <tr><th>Id</th><th>orderId</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th></tr>
            </thead>
            <tbody>
                {payments
                    .filter(payment => payment.country === selectedCountry)
                    .map((payment) => <PaymentTableRow key={payment.id} {...payment} />)}
            </tbody>
        </table>
    </>
    );
}

export default Transactions
