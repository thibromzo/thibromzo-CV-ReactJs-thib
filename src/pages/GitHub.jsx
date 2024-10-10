import chat from "../Assets/GitHub_chat.png"

const GitHub =()=>{
    return(
        <div className="GitHub text-center">
            <h3>GitHub user</h3>
            <br />
            <h4>John Doe</h4>
            <img src={chat} alt="Chat_GitHub" id="chat" />
            <p>As we all know, John Doe's identity is unknown. I Just wanted to contribute whithout being known.</p>
            <p>Abonnnés : 10</p>
            <p>Abonnements : 0</p>
            <p>Créé le 2016-06°09T17:14:00Z</p>
            <p>Modifié le : 2021_10_12T05:01:09Z</p>
            <p>URL Repositories : <a href="https://api.github.com/users/github-john-doe/repos">https://api.github.com/users/github-john-doe/repos</a></p>
        </div>
    )
}
export default GitHub;