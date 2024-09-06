import { useState } from "react";
import { Feed } from "../Feed/Feed";
import { SideBar } from "../SideBar/SideBar";
import "./Home.css";
export const Home = ({ sideBar }) => {
    const [category, setCategory] = useState(0);
    return (
        <>
            <SideBar sideBar={sideBar} category={category} setCategory={setCategory} />
            <div className={`container ${sideBar ? '' : 'large-container'}`}>
                <Feed category={category}/>
            </div>
        </>
    );
};
