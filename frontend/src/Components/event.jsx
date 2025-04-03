import Cover from "./cover";
 import Navbar from "./navbar";
const Event = () => {
    return ( 
        <div className="pt-16">
            <Navbar/>
            <Cover title="Event" sub1="Home" sub2="Event" />
            <h1>Event</h1>
        </div>
     );
}
 
export default Event;