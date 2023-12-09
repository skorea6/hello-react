import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
}

const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: '유재석1'},
        {email: 'user2@gmail.com', name: '유재석2'},
        {email: 'user3@gmail.com', name: '유재석3'},
        {email: 'user4@gmail.com', name: '유재석4'}
    ];

    return (
        <table>
            <thread>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thread>
            <tbody>
                {users.map(u => <User userData={u} />)}
            </tbody>
        </table>
    );
}

export default UserList;