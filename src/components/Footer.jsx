import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Footer(props) {

    const [ footerText, setFooterText ] = useState("Life Cycle Methods Exercise Hooks 9/22");
    return (
        <div className="row mt-3">
            <footer className="col-5 my-center footer">
                <p>{footerText}</p>
            </footer>
        </div>);
}
export default Footer;
