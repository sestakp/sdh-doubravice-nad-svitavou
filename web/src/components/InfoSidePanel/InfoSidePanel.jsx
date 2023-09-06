import { useEffect, useState } from "react";
import { db } from "../../firebase";
import dateSort from "../../utils/dateSort";
import { Paper } from "@mui/material";



function InfoSidePanel(props){
    
    const [newsData, setNewsData] = useState([]);
    const [guestBookData, setGuestBookData] = useState([]);
    
    
    useEffect(() => {
        const newsRef = db.collection("News");
      
        const unsubscribe = newsRef
        .orderBy("date", "desc") // Assuming "date" is the field name for the date in your documents
        .onSnapshot((snapshot) => {
          const data = snapshot.docs
          .sort((a, b) => dateSort(a.data(),b.data()))
          .slice(0, 4)
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setNewsData(data);
        });
      
        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      }, []);


      useEffect(() => {
        const newsRef = db.collection("GuestBook");
      
        const unsubscribe = newsRef
        .orderBy("date", "desc") // Assuming "date" is the field name for the date in your documents
        .onSnapshot((snapshot) => {
          const data = snapshot.docs
          .sort((a, b) => dateSort(a.data(),b.data()))
          .slice(0, 4)
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setGuestBookData(data);
        });
      
        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      }, []);


    return(
        <div style={{paddingLeft: "20px"}}>
            <h2>Novinky</h2>
            {newsData.map(newsItem => (
                <div style={{padding: "5px", margin: "5px", borderBottom: "1px solid white"}}>
                    <h5>{newsItem.header} ({newsItem.date})</h5>
                    <p>{newsItem.description}</p>
                </div>
            ))}
            <h2>Kniha návštěv</h2>
            {guestBookData.map(guestBookItem => (
                <div style={{borderBottom: "1px solid white"}}>
                    <h5>{guestBookItem.author} napsal:</h5>
                    <div>
                        <div style={{padding: "5px"}} dangerouslySetInnerHTML={{ __html: guestBookItem.text }} />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default InfoSidePanel;