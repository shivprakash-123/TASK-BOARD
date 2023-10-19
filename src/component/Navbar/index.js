import React, { useState } from 'react';
import './navbar.css';
import { BsListUl } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [dropOpen1, setDropOpen1] = useState(false);
    const [dropOpen2, setDropOpen2] = useState(false);
    const dropMenu1 = ["Status","User","Priority"];
    const dropMenu2 = ["Priority","Title"];

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleClick = ()=>{
        setDropOpen1(false)
        setDropOpen2(false)
        setDropdown(false)
    }

    return (
        <div className='navbar'>
            <div className='display-btn'>
                <BsListUl onClick={handleDropdown} />
                <span>Display</span>
                <RiArrowDropDownLine />
                {dropdown && <div className='dropdown'>
                    <div className='sort'>
                        <span>Groping</span>
                        <div className='status'>
                            <span>Status</span>
                            <RiArrowDropDownLine onClick={() => setDropOpen1(!dropOpen1)} />
                            {dropOpen1 && <div className='sub-drop1'>
                                {
                                    dropMenu1.map((item, idx) => (
                                        <Link to ={`/${item}`} className='drop-items' key={idx} onClick={handleClick}>{item}</Link>
                                    ))
                                }
                            </div>}
                        </div>
                    </div>
                    <div className='sort'>
                        <span>Ordering</span>
                        <div className='priority'>
                            <span>priority</span>
                            <RiArrowDropDownLine onClick={() => setDropOpen2(!dropOpen2)} />
                            {dropOpen2 && <div className='sub-drop2'>
                                {
                                    dropMenu2.map((item, idx) => (
                                        <div className='drop-items' key={idx} onClick={handleClick}>{item}</div>
                                    ))
                                }
                            </div>}
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;
