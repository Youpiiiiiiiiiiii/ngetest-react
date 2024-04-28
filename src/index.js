import React from "react";
import ReactDOM from "react-dom/client"
import './style.css'




const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);


function HomePage() {
    function atasiClick() {
        alert('YUDDDDDDDANNNNNNNNNNNNNNN');
    }

    return (
        <div className="baru">
            <h2>TEST DOANG INI MAH</h2>
        <button onClick={atasiClick}>Klik Saya</button>
        </div>
    )
}
root.render(<HomePage />)