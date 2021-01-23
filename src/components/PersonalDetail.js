const PersonalDetail = (props) =>{
    const profile_info = props.profile_info;
    const show = props.show;
    const valuedate = profile_info.created_at;
    return (
        <div className="personal">
            {
                show === true &&    
                (
                    <img
                        className="circular image"
                        src={profile_info.avatar_url}
                        alt={profile_info.avatar_url}
                    />
                )
            }
            {show === true && (
                <div className="personal_info">
                    <div>Name : {profile_info.name}</div>
                    <div>location : {profile_info.location}</div>
                    <div>Followers : {profile_info.followers}</div>
                    <div>Following : {profile_info.following}</div>
                    <div>Created On : {valuedate.substring(0,10)}</div>
                </div>
            )}
        </div>
    )
}

export default PersonalDetail;