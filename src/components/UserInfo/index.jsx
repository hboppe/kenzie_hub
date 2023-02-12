const UserInfo = ({user}) => {
    // console.log(user)
    return (
        <div>
            
            <h1 className="title1">Olá,{user.name} </h1>
            <p>{user["course_module"]}</p>
        </div>
    )
}

export default UserInfo;