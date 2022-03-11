import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <ul>
        <li className="Favorite Colors">Favorite Colors</li>
        <ol>
            <li>Blue</li>
            <li>Red</li>
            <li>Black</li>
        </ol>
        <li className="Favorite Music">Favorite Music</li>
        <ol>
            <li>Michael W Smith</li>
            <li>Amy Grant</li>
            <li>News Boys</li>
        </ol>
        <li className="Favorite Food">Favorite Food</li>
        <ol>
            <li>Lasagna</li>
            <li>Pizza</li>
            <li>Chocolate</li>
        </ol>
        <li className="Favorite Websites">Favorite Websites</li>
        <ol>
            <li><a href = "https://www.klove.com/">www.klove.com</a></li>
            <li><a href = "https://betheltech.net/">betheltech.net</a></li>
            <li><a href = "https://www.bing.com/">www.bing.com</a></li>
        </ol>

    </ul>,

    document.getElementById('root')
);