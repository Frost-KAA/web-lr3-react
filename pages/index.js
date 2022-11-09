import {setAuthToken} from './components/setAuthToken'
import {useEffect, useState} from "react";
import Layout from './layout';
const Home = () => {

    // localStorage.clear();
    
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                if (typeof window !== 'undefined') {
                    const token = localStorage.getItem("token");
                    if (token) {
                        setAuthToken(token);
                        setAuth(true);
                    }
                    else{
                        setAuth(false);
                    }
                }
                else{
                    setAuth(false);
                }
                
            }
        )();
    });

    return(
        <Layout auth={auth} />
    )
}

export default Home;