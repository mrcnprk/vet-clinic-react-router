import '../styles/Page.css'
import React, { Component } from 'react';
import PO from '../images/PO.jpg'
import DG from '../images/DG.jpg'
import EK from '../images/EK.jpg'

class Workers extends Component {
    state = {
        workers: [
        {
            img: PO,
            name: "Paweł Olszewski",
            proffesion: "Lekarz weterynarii"
        },
        {
            img: DG,
            name: "Dominik Gąsiorowski",
            proffesion: "Lekarz weterynarii"
        },
        {
            img: EK,
            name: "Ewa Kowalska",
            proffesion: "Lekarz weterynarii"
        },
        ]
     }
    render() {
        const list2 = this.state.workers.map(worker => (
            <div className="workerInfo" key={worker.name}>
                <img className="workerImage" src={worker.img} alt={worker.name}/>
                <p className="workerName"><strong>{worker.name}</strong>,<br/>{worker.proffesion}</p>
            </div>
            ))

        return (
            <div className="workers">
                <h3>Nasi weterynarze:</h3>
                {list2}
            </div>
         );
    }
}

export default Workers;