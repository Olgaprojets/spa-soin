import { Component } from "react";
import check from './check.jpg';

export class ListSoin extends Component {
    state = {
        userInput: '',
        listSoin: []
    }
    onChangeEvent(e) {
        this.setState({userInput:e})
    }
    addItem(input) {
        if (input === '') {
            alert ("Veuillez saisir un element")
        } else { 
        let listMassage = this.state.listSoin;
        listMassage.push(input);
        this.setState({listSoin:listMassage, userInput:''})
    } 
    } 
    deleteItem() {
        let listArray = this.state.listSoin;
        listArray = [];
        this.setState({listSoin: listArray})
    }

    motBarre(event) {
        const li = event.target;
        li.classList.toggle('barre');
    }
    onFormSubmit(e) {
    e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="Soins à la carte" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div>
            <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn">Ajouter</button>
          </div>
          <ul>
            {this.state.listSoin.map((item, index) => (
                <li onClick={this.motBarre} key={index}> 
                    <img src={check} width="20px" alt="Check"/>  
                     {item}
                     </li>
            ))}
          </ul>
          <div className="container"> 
          <button onClick={() => this.deleteItem()} className="btnTwo">Supprimer</button>
          </div>
          </form>
         </div>
        )
    }
}