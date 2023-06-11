const GithubUser = ({ login, avatar_url, html_url }, { key }) => {
  return (
    <li key={key} className="user">
      <img src={avatar_url} alt={login} />
      <h3>{login}</h3>
      <p>
        Go to <a href={html_url}>Profile</a>
      </p>
    </li>
  )
}

export default GithubUser