import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Spinner from './Spinner';


export default function Dashboard() {
  
    const [cards,setcard] = useState({articles:[],totalNum:""});
    const [querry,setquerry] = useState("everything");
    const [isactive,setactive] = useState("home");
    const [headline,setheadline] = useState("Breaking News, Latest Trends, and Expert Insights – Stay Ahead, Stay Informed!")
    const [page,setpage] = useState(1);
    const [pageSize,sepageSize] = useState(20);
    const [isloading,setloading] = useState(false);
    const [search,setsearch] = useState("");
   


    function searching(event)
    {
        let text = document.getElementById("inputfield").value;
        
        setquerry("");

        event.preventDefault();
        setsearch(text);
   
    }


  
useEffect(() => {
    
    
    async function fetchdata(){
      const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

        setloading(true);
        let url =`https://gnews.io/api/v4/search?q=${querry}${search}&page=${page}&pageSize=${pageSize}&lang=en&in=title,description&country=in&max=20&apikey=${API_KEY}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        setloading(false);
      
        setcard({articles:parsedata.articles || [],totalNum:parsedata.totalArticles || 0});
         console.log(parsedata.length);
        if(parsedata.articles.length === 0 )
        {
            setheadline("Result not found")
        }
      
    }
    
   
    
      fetchdata();
         
}, [querry,page,search]);



  return (
    <div>
     
     {isloading&&<Spinner/>}
    <nav className="navbar navbar-expand-lg   navbar-dark bg-dark position-fixed w-100 top-0 left-0 z-3">
  <div className="container-fluid">
    <a className="navbar-brand mr-4" href="#">Hunk-News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${isactive==='home'?'active':''} `} aria-current="page" href="#" onClick={()=>{setquerry("everything");setactive("home");setsearch("");setheadline("Breaking News, Latest Trends, and Expert Insights – Stay Ahead, Stay Informed!")}}>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${isactive==='sports'?'active':''}`} aria-current="page" href="#" onClick={()=>{setquerry("sports");setactive("sports");setsearch("");setheadline("Breaking Sports News, Live Scores & Game Highlights – All in One Place!");}}>Sports</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${isactive==='technology'?'active':''}`} aria-current="page" href="#" onClick={()=>{setquerry("technology");setsearch("");setactive("technology");setheadline("Breaking Tech News, Innovations & Trends – Stay Ahead of the Future!");}}>Technology</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${isactive==='Entertainment'?'active':''}`} aria-current="page" href="#" onClick={()=>{setquerry("entertainment");setsearch("");setactive("Entertainment");setheadline("Lights, Camera, Action! Stay Updated with the Hottest Entertainment Buzz!");}}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${isactive==='politics'?'active':''}`} aria-current="page" href="#" onClick={()=>{setquerry("Politics");setactive("politics");setsearch("");setheadline("Decoding Politics: News, Debates & Insights That Shape the World!");}}>Politics</a>
        </li>
        
        <li className="nav-item">
          <a className={`nav-link  ${isactive==='health'?'active':''}`} aria-current="page" href="#" onClick={()=>{setquerry("Health");setactive("health");setsearch("");setheadline("Your Guide to Better Health – News, Advice & Medical Insights!");}}>Health</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" id ="inputfield" placeholder="Search"  aria-label="Search"/>
        <button className="btn btn-primary " type="submit" onClick={searching}>Search</button>
      </form>
    </div>
  </div>
    </nav>

   
<div className="container my-5">
    
<div className="row">


 <div className='my-5'>
  <h1 className='fw-bold fs-2 text-center'>{headline}</h1>
 </div>
{cards.articles.map((card)=>(
    <div className='col-md-4 my-4' key={card.url}>
     <div   className="card"   style={{width: "22rem",height:'30rem'}}>
        
  <img src={card.image} className="card-img-top"style={{objectFit:'cover',height:'50%'}} alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{card.title.slice(0,55)+"..."}</h5>
    <p className="card-text">{card.description.slice(0,70)+"..."}</p>
    <p className="card-text small my-3  text-muted" style={{fontSize:'13px'}}>By {!card.author?'unknown':card.author}<br/>{ new Date(card.publishedAt).toUTCString()}</p>
    <a href={card.url} className="btn btn-dark" >Read more</a>
  </div>
     </div>
</div>
))}
</div>
     </div>
    <div className="container p-5 d-flex justify-content-between">
    <button className="btn btn-dark  btn-lg "disabled ={page===1}  onClick={()=>{setpage(page-1)}}>prev</button>
        <button className="btn btn-dark btn-lg" disabled={page>=Math.ceil(cards.totalNum/pageSize)} onClick={()=>{setpage(page+1);}}>next</button>

    </div>
<Footer/>
</div>

  
  )
}
