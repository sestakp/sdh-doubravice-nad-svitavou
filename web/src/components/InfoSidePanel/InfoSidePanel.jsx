import { useEffect, useState } from "react";
import { db } from "../../firebase";
import dateSort from "../../utils/dateSort";
import { Paper } from "@mui/material";



function InfoSidePanel(props){
    
    const [newsData, setNewsData] = useState([]);
    const [guestBookData, setGuestBookData] = useState([]);
    

    function clipText(text){

      if(text.length > 100){
        return text.slice(0, 100) + "..."
      }
      return text;
    }

    
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
            <h2 style={{padding: "5px", margin: "5px"}}>Novinky</h2>
            {newsData.map((newsItem,index) => (
                <div style={{padding: "5px", margin: "5px", borderBottom: "1px solid white"}}  key={"sidePanel_new_news"+index}>
                    <h5>{newsItem.header} ({newsItem.date})</h5>
                    <p>{clipText(newsItem.description)}</p>
                </div>
            ))}
            <h2 style={{padding: "5px", margin: "5px", marginTop: "100px"}}>Kniha návštěv</h2>
            {guestBookData.map((guestBookItem,index) => (
                <div style={{padding: "5px", margin: "5px", borderBottom: "1px solid white"}} key={"sidePanel_new_guestBook"+index}>
                    <h5>{guestBookItem.author} napsal:</h5>
                    <div>
                        <div style={{ }} dangerouslySetInnerHTML={{ __html: guestBookItem.text }} />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default InfoSidePanel;