// rrd imports
import { useLoaderData } from "react-router-dom";

// helper function
import { fetchData } from "../helpers";

//components
import Intro from "../components/Intro";

//library
import { toast } from "react-toastify";

// loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

//actions
export async function dashboardAction({request}) {
    const data = await request.formData()
    const formData = Object.fromEntries(data)
    try {
        throw new Error('Ya done')
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)}
        catch(e) {throw new Error("There was a problem creating your account")}

};

const Dashboard = () => {
    const { userName } = useLoaderData();

    return (
        <>
           {userName ? (<p>{userName}</p>) : (<Intro />)}
        </>
    )
}

export default Dashboard;