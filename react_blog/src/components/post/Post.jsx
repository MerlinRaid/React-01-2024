import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://cdn.pixabay.com/photo/2023/05/15/14/02/cat-7995160_1280.jpg" alt="" />
   
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Mingi täitsa suvaline tekst.
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Mingi täitsa suvaline tekst,
            seal on tal mingi võõrkeelne mula.
            Aga tal on seda mitu rida nii, et 
            ma kirjutan natuke veel!
            Mingi täitsa suvaline tekst,
            seal on tal mingi võõrkeelne mula.
            Aga tal on seda mitu rida nii, et 
            ma kirjutan natuke veel!
            Mingi täitsa suvaline tekst,
            seal on tal mingi võõrkeelne mula.
            Aga tal on seda mitu rida nii, et 
            ma kirjutan natuke veel!
        </p>
    </div>
  )
}
