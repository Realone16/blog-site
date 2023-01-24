import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author: Realone</h1>
          
          <img src="./img/Octocat.png" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">Realone’s interest in web development is a result of trying to understand the mystery behind attractive web pages. I started learning about web development when I was 17 years old. I now enjoy using HTML, CSS to create beautiful website designs, and React to create web apps. I am still learning more to be an expert.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;