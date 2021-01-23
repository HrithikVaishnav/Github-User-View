import React, { useState } from "react";
import UserDetail from "./UserDetail";
const Profile = () => {
  const [profileJson, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [isShow, setisShow] = useState(false);
  const [isError , setisError] = useState(false);
  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
        try{
          const profile = await fetch(`https://api.github.com/users/${username}`);
          const profileJson = await profile.json();
          const repositories = await fetch(profileJson.repos_url);
          const repoJson = await repositories.json();
          if (profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
            setisShow(true);
          }
        }
        catch{
          console.log("here errro");
          setisError(true);
        }
        // console.log(profileJson);
    

    //console.log(repoJson);

   
    //console.log(profileJson,repositories,username );
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="Search-box">
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />

          <button
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
        </div>

        {
          isError ? <div className="Error-item">User not exist</div> :
          <UserDetail profile_info ={profileJson} repo_info={repositories} username={username} isShow={isShow}/>
        }
      </div>
    </>
  );
};
export default Profile;