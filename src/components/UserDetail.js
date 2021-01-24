import React, { useState } from "react";
import PersonalDetail from './PersonalDetail';
import RepoDetail from './RepoDetail';
const UserDetail = (props) => {
    //console.log(props);
    const profile_info = props.profile_info;
    const repo_info = props.repo_info;
    const [shown_info , setShowInfo] = useState(true); 
  
    const oninfohandlertrue = () => {
        setShowInfo(true);
    };
    const oninfohandlerfalse = () => {
        setShowInfo(false);
    };
    return (
        <div className="container">
            <div className="bar">
                <div className={`bar-box + ${shown_info === true ? "active":""}`} onClick={oninfohandlertrue}>General Information</div>
                <div className="Midline">hi</div>
                <div className={`bar-box + ${shown_info === true ? "":"active"}`} onClick={oninfohandlerfalse}>Repositories</div>
            </div>
            <div className="main-content">
                {shown_info === true && (
                    <PersonalDetail profile_info={profile_info} show={props.isShow}/>
                )}
                {shown_info === false && (
                    <RepoDetail repo_info={repo_info}/>
                )}
            </div>
        </div>
    )
}

export default UserDetail;