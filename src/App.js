import React, { Component } from "react";
import "./App.css";
//import Budget from './components/Budget';
//import ReactPlaid, {DEV_ENV, CONNECT_PRODUCT} from 'react-plaid';
import Transactions from "./Transactions";
//import ExpenditureStream from "./components/ExpenditureStream";
//import IncomeStream from './components/IncomeStream';
import Accounts from './components/Accounts';

class App extends Component {
  state = {
    transactions: Transactions
    //filteredTransactions : []
  };

  // filterTransactions(e){
  //   let filteredTransactions = this.state.transactions.transactions;
  //   filteredTransactions = filteredTransactions.filter((e) => {
  //     return e.account_id = 'eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl';
  //   })
  //   this.setState({
  //     filteredTransactions
  //   })
  // }
  render() {
    console.log(this.state.filteredTransactions);
    return (
      <div className="container-fluid">
        <React.Fragment>
        <Accounts accounts={this.state.transactions.accounts}/>
        
        </React.Fragment>
      </div>
    );
  }
}

export default App;
