import { Switch, Route } from 'react-router-dom';
import Contact from '../pages/Contact'
import PriceList from  '../pages/PriceList'
import Workers from  '../pages/Workers'
import Announcements from  '../pages/Announcements'
import Article from '../pages/Article'
import '../styles/Page.css'

const Page = () => {
    return (
        <>
            <Switch>
                <Route path='/cennik' component={PriceList}/>
                <Route exact path='/ogloszenia' component={Announcements}/>
                <Route path='/pracownicy' component={Workers}/>
                <Route exact path='/' component={Contact}/>
                <Route path='/ogloszenia/:id' component={Article} />
            </Switch>
        </>
     );
}

export default Page;