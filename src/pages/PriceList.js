import '../styles/Page.css'
import React, { Component } from 'react';

class PriceList extends Component {
    state = {
        Offers: [
            {
                id: "Obcinanie pazurów",
                price: "15zł"
            },
            {
                id: "Wizyta kontrolna",
                price: "19zł"
            },
            {
                id: "Badania laboratoryjne krwi",
                price: "39zł"
            },
            {
                id: "Badania RTG",
                price: "100zł"
            },
            {
                id: "Badania USG",
                price: "120zł"
            },
            {
                id: "Badania EKG",
                price: "150zł"
            },
            {
                id: "Badanie laboratoryjne moczu",
                price: "39zł"
            },
            {
                id: "Znakowanie zwierząt mikroczipem",
                price: "69zł"
            },
            {
                id: "Badania cytologiczicze i histopatologiczne",
                price: "99zł"
            },
            {
                id: "Wystawianie dokumentów",
                price: "39-99zł"
            },
            {
                id: "Szczepienia",
                price: "Ustalana indywidualnie"
            },
            {
                id: "Obserwacja pod kątem wścieklizny",
                price: "Ustalana indywidualnie"
            },
            {
                id: "Zabiegi chirurgiczne",
                price: "Ustalana indywidualnie"
            },
            {
                id: "Usługa hospitalizacyjna",
                price: "Ustalana indywidualnie"
            },
        ]
     }
    render() {
    const list = this.state.Offers.map(offer => <li key={offer.id} className="listItem"><span>{offer.id}:</span><span>{offer.price}</span></li>)
        return (
            <>
            <h3>Oferta naszej przychodni:</h3>
            <ul className="productList">
                {list}
            </ul>
            <p className="additionalPriceInfo"><strong>Ceny pozostałych usług ustalana jest indywiudalnie podczas wizyty</strong></p>
            </>
         );
    }
}

export default PriceList;
