import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
  return ( 
    <header>
        <div className="logo">
            <h3>
                しゅうまつのページ
            </h3>

        </div>

        <nav>
            <ul>
             <li>
                <Link to="/" >ホーム</Link>
            </li> 
             <li>
                <Link to="/blog">ブログ</Link>
            </li>
            <li>
                <Link to="/MySNS">SNS</Link>

            </li>      
            <li>
                <Link to="/MyArts">作品</Link>

            </li>  

            <li>
                <Link to= "/CostCalculatorPage">費用計算</Link>

            </li>             
         
            </ul>            
        </nav>


    </header>
  );
}

export default Header