const RepoDetail = (props) => {
    const repositories =  props.repo_info;
    return(
        <div className="repo-content">
            {repositories.map(repo => (
              <div className="repo-box" key={repo.name}>
                <div className="repo-item">
                  <div>Name : {repo.name}</div>
                  <p>Star : {repo.stargazers_count}</p>
                  <a href={repo.html_url} className="header" target="_blank">Link</a>
                </div>
              </div>
            ))}
        </div>
    )
}

export default RepoDetail;