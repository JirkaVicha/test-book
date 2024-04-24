
const Book = ({ image, title, author, desc, link, smazat, id }) => {
  return (
    <article className="book">
      <a href={link} target="_blank" >
        <img src={image} alt={title} />
      </a>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{desc}</p>
      <a href={link} target="_blank"><button className="read-btn">Read online</button></a>
      <button className="del-btn" onClick={() => smazat(id)}>Delete</button>
    </article>
  )
}

export default Book