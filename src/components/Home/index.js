import { Component } from "react";
import BackPacks from "../BackPacks";
import Bags from "../Bags";
import { PiUploadSimpleBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoBag } from "react-icons/io5";

import './index.css'

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <header className="head-contianer">
                    <div className="nav-headers">
                        <div className="header-heading-container">
                            <h1 className="header">TANN TRIM</h1>
                        </div>
                        <div className="head-icons-container">
                            <CiSearch className="react-icons"/>
                            <FaUser className="react-icons"/>
                            <CiBookmark className="react-icons"/>
                            <IoBag className="react-icons"/>
                        </div>
                    </div>
                </header>
                <div>
                <div className="head-options-container">
                    <p className="head-options-content">Bags</p>
                    <p className="head-options-content">Travel</p>
                    <p className="head-options-content">Accesories</p>
                    <p className="head-options-content">Gifting</p>
                    <p className="head-options-content">Jewelery</p>
                </div>
                <div className="backpacks-container">
                    <BackPacks/>
                    <div className="bags-heading">
                        <h3 className="bags-head">Bags.BackPacks</h3>
                        <h3 className="bags-head">13 Products <PiUploadSimpleBold/> </h3>
                    </div>
                    <div className="bags-container">
                    <Bags/>
                </div>
                </div>
                </div>

                
            </div>
        )
    }
}
export default Home 