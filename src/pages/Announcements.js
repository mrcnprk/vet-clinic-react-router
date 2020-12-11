import '../styles/Page.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import syringe from '../images/syringe.png'
import worms from '../images/worms.png'
import overweight from '../images/overweight.png'
import food from '../images/food.png'
import coronavirus from '../images/coronavirus.png'

class Announcements extends Component {
    state = {
        announcements: [
            {
                img: syringe,
                id: "0",
                title: "Pamiętaj zaszczepić swojego puplia w wieku młodzieńczym!",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla tempora officiis, in atque quasi aspernatur placeat quod quam? Ad, quam aliquid distinctio architecto quis repellendus possimus. Atque voluptatem natus nihil officiis modi magnam doloribus nobis, expedita totam veniam earum cumque aspernatur temporibus commodi incidunt neque qui ipsam itaque dolor hic ipsa dolorem. Quas hic obcaecati, a distinctio ipsum nostrum cum ea labore modi sit velit quidem rem minima asperiores tempora esse voluptatibus illum perferendis. Illo rerum maiores voluptas odit id facere repellendus mollitia, quis quaerat quae, assumenda architecto atque aut ea voluptatibus illum possimus odio tempore maxime sit molestiae dolorum? Veritatis esse illo maiores fugit consectetur perferendis quod excepturi fuga debitis nesciunt et itaque odio nisi sed, inventore molestias porro, quidem cupiditate, numquam mollitia? Numquam veritatis sunt dolorem laudantium?",
                author: "lek. wet. Ewa Kowalska",
                publishDate: "1.10.2020",
                link: "",
            },
            {
                img: worms,
                id: "1",
                title: "Weterynarze zalecają regularne odrobaczanie zwierząt domowych raz w roku!",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla tempora officiis, in atque quasi aspernatur placeat quod quam? Ad, quam aliquid distinctio architecto quis repellendus possimus. Atque voluptatem natus nihil officiis modi magnam doloribus nobis, expedita totam veniam earum cumque aspernatur temporibus commodi incidunt neque qui ipsam itaque dolor hic ipsa dolorem. Quas hic obcaecati, a distinctio ipsum nostrum cum.",
                author: "lek. wet. Ewa Kowalska",
                publishDate: "13.11.20202",
                link: "",
            },
            {
                img: overweight,
                id: "2",
                title: "Otyłość dorosłych psów może skrócić ich życie nawet o 4 lata! Zadbaj o odpowiednią dietę dla swojego czworonoga!",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla tempora officiis, in atque quasi aspernatur placeat quod quam? Ad, quam aliquid distinctio architecto quis repellendus possimus. Atque voluptatem natus nihil officiis modi magnam doloribus nobis, expedita totam veniam earum cumque aspernatur temporibus commodi incidunt neque qui ipsam itaque dolor hic ipsa dolorem. Quas hic obcaecati, a distinctio ipsum nostrum cum ea labore modi sit velit quidem rem minima asperiores tempora esse voluptatibus illum perferendis. Illo rerum maiores voluptas odit id facere repellendus mollitia, quis quaerat quae, assumenda architecto atque aut ea voluptatibus illum.",
                author: "lek. wet. Ewa Kowalska",
                publishDate: "21.11.2020",
                link: "",
            },
            {
                img: food,
                id: "3",
                title: "W naszej przychodni dostępna jest szeroka gama karm Royal Canin, wybierz odpowiednią dla swojego pupila!",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla tempora officiis, in atque quasi aspernatur placeat quod quam? Ad, quam aliquid distinctio architecto quis repellendus possimus. Atque voluptatem natus nihil officiis modi magnam doloribus nobis, expedita totam veniam earum cumque aspernatur temporibus commodi incidunt neque qui ipsam itaque dolor hic ipsa dolorem. Quas hic obcaecati, a distinctio ipsum nostrum cum ea labore modi sit velit quidem rem minima asperiores tempora esse voluptatibus illum perferendis. Illo rerum maiores voluptas odit id facere repellendus mollitia, quis quaerat quae, assumenda architecto atque aut ea voluptatibus illum possimus odio tempore maxime sit molestiae dolorum? Veritatis esse illo maiores fugit consectetur perferendis quod excepturi fuga debitis nesciunt et itaque odio nisi sed, inventore molestias porro.",
                author: "lek. wet. Ewa Kowalska",
                publishDate: "30.11.2020",
                link: "",
            },
            {
                img: coronavirus,
                id: "4",
                title: "Jak dbamy o wasze bezpieczeństwo w czasach COVID-19?",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla tempora officiis, in atque quasi aspernatur placeat quod quam? Ad, quam aliquid distinctio architecto quis repellendus possimus. Atque voluptatem natus nihil officiis modi magnam doloribus nobis, expedita totam veniam earum cumque aspernatur temporibus commodi incidunt neque qui ipsam itaque dolor hic ipsa dolorem.",
                author: "lek. wet. Ewa Kowalska",
                publishDate: "1.12.20202",
                link: "",
            }
        ]
     }
    render() {
        const list = this.state.announcements.map(item => (
            <div className="article" key={item.id}>
                <h3 className="articleTitle"><img className="articlePic" src={item.img} alt="article-pic"/>{item.title}</h3>
                <p className="articleAuthor"><em>{item.publishDate}, {item.author}</em></p>
                {/* <Link className="articleLink" to={"/ogloszenia/"+item.id}><em>Czytaj więcej...</em></Link> */}
                <Link className="articleLink" to={{
                    pathname: '/ogloszenia/'+item.id,
                    state: {
                        title: item.title,
                        img: item.img,
                        text: item.text,
                        author: item.author,
                        publishDate: item.publishDate

                    }
                }}>Czytaj więcej</Link>
            </div>
        ))
        return (
            <>
            <h3>Ogłoszenia:</h3>
            <ul className="articleList">
                {list}
            </ul>
            </>
         );
    }
}

export default Announcements;