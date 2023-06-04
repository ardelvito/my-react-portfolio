import './navigationbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import { useState } from 'react';

function Navigationbar(){
    const [activeNav, setActiveNav] = useState('#hero')

    return(
        <nav>
            <a href="#hero"  onClick={() => setActiveNav("#hero")} className={ activeNav === "#hero" ? "active" : ""}><AiOutlineHome/></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={ activeNav === "#experience" ? "active" : ""}><BiBook/></a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={ activeNav === "#portfolio" ? "active" : ""}><MdOutlineWorkOutline/></a>
            <a href="#testimonials" onClick={() => setActiveNav("#testimonials")} className={ activeNav === "#testimonials" ? "active" : ""}><BsPeople/></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={ activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
        </nav>
    )
}
export default Navigationbar;