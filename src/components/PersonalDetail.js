const PersonalDetail = (props) =>{
    const profile_info = props.profile_info;
    const show = props.show;
    return (
        <div>
            {show === true && (
                <div className="personal_info">
                <div>Name : {profile_info.name}</div>
                <div>location : {profile_info.location}</div>
                <div>Followers : {profile_info.followers}</div>
                <div>Following : {profile_info.following}</div>
                <div>Created On : {profile_info.created_at}</div>
                </div>
            )}
        </div>
    )
}

export default PersonalDetail;