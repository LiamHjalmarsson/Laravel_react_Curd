const Home = () => {

    const sendData = async () => {

        let payload = {
            "name": "This is a new event that got modified",
        };
        
        try {
            // let response = await fetch("http://127.0.0.1:8000/api/events", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            //     body: JSON.stringify(payload)
            // });

            // let response = await fetch("http://127.0.0.1:8000/api/events/1");
            // let response = await fetch("http://127.0.0.1:8000/api/events?include=user,attendees,attendees.user");  // 183 1 
            // let response = await fetch("http://127.0.0.1:8000/api/events?include=attendees");
            // let response = await fetch("http://127.0.0.1:8000/api/events/4/attendees");
            
            // let response = await fetch("http://127.0.0.1:8000/api/events/1/attendees/183");

            // let response = await fetch("http://127.0.0.1:8000/api/events/5/attendees/155", {
            //     method: "DELETE",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            // });

            // let response = await fetch("http://127.0.0.1:8000/api/events/4/attendees", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            // });

            let response = await fetch("http://127.0.0.1:8000/api/events/1/attendees/183");
            
            // let response = await fetch("http://127.0.0.1:8000/api/events/3", {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            //     body: JSON.stringify(payload)
            // });
        
            // let response = await fetch("http://127.0.0.1:8000/api/events/3", {
            //     method: "DELETE",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            // });
        
            console.log(response);
        
            let resource = await response.json();
        
            console.log(resource);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1> Home </h1>
            <button onClick={sendData}> Send </button>
        </div>
    );
}

export default Home;