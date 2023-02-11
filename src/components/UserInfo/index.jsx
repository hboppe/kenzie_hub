const UserInfo = ({user}) => {
    return (
        <div>
            <h1 className="title1">Olá, {user.name}</h1>
        </div>
    )
}

export default UserInfo;