import '../styles/Page.css'
import React, { Component } from 'react';
import {Prompt} from 'react-router-dom'

class Contact extends Component {
    state = {
        message: "",
        email: "",
    }
    render() {


        this.handleSubmit = (e) => {
                e.preventDefault();
                console.log('wysyłam!')
                if(this.state.message.length >= 15 && this.state.email.includes("@")){
                this.setState({
                    message: "",
                    email: "",
                })
                window.alert("Dziękujemy za kontakt z nami! Odpowiemy tak szybko jak to możliwe!")
            }
                else {window.alert("Błąd wysyłania wiadomości! Upewnij się, że Twoja wiadomość ma przynajmniej 15 znaków i wprowadziłeś/aś poprawny adres e-mail!")}

        }

        this.handleMessageChange = (e) => {
            this.setState({
                message: e.target.value
            })
        }

        this.handleEmailChange = (e) => {
            this.setState({
                email: e.target.value
            })
        }

        return (
            <>
                <h3>Kontakt:</h3>
                <div className="contactSection">
                <div className="contactInfo">
                    <p className="callUs"><span className="infoIcon"><i className="fas fa-phone"></i></span> 678-901-234</p>
                    <p className="localization"><span className="infoIcon"><i className="fas fa-map-marker-alt"></i></span> 95-200 Pabianice, Łódzkie, ul.Weterynaryjna 69</p>
                    <div className="open">
                        <span className="infoIcon"><i className="fas fa-clock"></i></span>
                        <p className="openInfo">
                            <span>Poniedziałek-Piątek: <strong>8:00 - 17:00</strong></span>
                            <span>Sobota: <strong>10:00 - 14:00</strong></span>
                            <span>Niedziela: <strong>nieczynne</strong></span>

                        </p>
                    </div>
                </div>


                <form className="contactForm" onSubmit={this.handleSubmit}>
                    <label>Napisz do nas!</label>
                    <textarea className="contactMessage" placeholder="Treść wiadomości..." value={this.state.message} onChange={this.handleMessageChange} />
                    <label><input type="e-mail" placeholder="Adres e-mail na który mamy przesłać odpowiedź:" className="telNumber" value={this.state.email} onChange={this.handleEmailChange}></input></label>
                    <button className="contactButton">Wyślij</button>
                    <Prompt when={this.state.message.length > 0} message="Zacząłeś pisać wiadomość, czy na pewno chcesz opóścić bieżącą stronę?" />
                </form>
                </div>
            </>
         );
    }
}

export default Contact
