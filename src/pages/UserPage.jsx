import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

const UserPage = () => {
    const params = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <section>
            <div>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <a href={user.website}>{user.website}</a>
                <p>{user?.address?.city}</p>
            </div>
        </section>
    )
}

export default UserPage;