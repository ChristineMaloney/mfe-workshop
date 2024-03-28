import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
import { UserType, UserContext } from './context/UserContext';
import { useState } from 'react';
import Footer from './components/pageHeader/Footer';

function App() : JSX.Element  {

    const [user, setUser] = useState<UserType>({name:"", role : ""});


    return (
        <UserContext.Provider value= { 
           { 
            user : user , 
            login: setUser, 
            logout: () => setUser({name:"", role:""}) }}>
        <BrowserRouter>
            <PageHeader/>

            <Routes>
                <Route path="/add" element = {<AddTransaction/>}/>
                <Route path="/find" element = {
                <>
                    <Search/>
                    <Transactions/>
                </>
                }/>
                 <Route path="" element = {<h1>HomePage</h1>}/>

                <Route path="*" element = {<h1>PageNotFound</h1>}/>
                
            </Routes>
            
            
        </BrowserRouter>
        <Footer/>
        </UserContext.Provider>
        
    
    );
}

export default App;
