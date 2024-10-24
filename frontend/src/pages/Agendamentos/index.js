import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { auth, db } from '../../services/firebaseConfig';
import {doc,getDoc} from 'firebase/firestore';

export default function Agendamentos() {
    
    const [userDetails, setUserDetails] = useState(null);
    const fecthUserDetails = async () => {
        auth.onAuthStateChanged(
            async (user) => {
                const refDoc = doc(db, 'users', user.uid)
                const docSnap = await getDoc(refDoc)
                if(docSnap.exists()){
                    setUserDetails(docSnap.data())
                    console.log(docSnap.data())
                }
            }
        )
    }

    useEffect(() => {
        fecthUserDetails();
    }, []);

    return (
        <div className="container">
            <Header />
            <h1>Agendamentos</h1>
            <p>{ userDetails.nome}</p>
            <Footer />
        </div>
    );
}
