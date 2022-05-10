import "./Post.css"

const Post = (props) => {
    return (
        <div className="post">
            {props.post.map(el => (
                <div className="item" key={el.id}>
                    <h1>Carts</h1>
                    <div>{el.id}</div>
                    <span>{el.title}</span>
                     <>
                        <img src={el.thumbnailUrl}/>
                     </>
                    
                </div>
                
              
            ))}
        </div>
    )
}

export default Post;