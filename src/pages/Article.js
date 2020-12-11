import '../styles/Page.css'
const Article = (props) => {
    const prop = props.location.state
    return (
        <div className="articlebox">
            <h3>{prop.title}</h3>
            <img src={prop.img} alt=""/>
            <p>{prop.text}</p>
            <p><em>{prop.publishDate}, {prop.author}</em></p>
        </div>
     );
}

export default Article;