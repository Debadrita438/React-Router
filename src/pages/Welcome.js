import { Route } from "react-router";

const Welcome = () => {
    return(
        <>
            <h1>The Welcome Page</h1>
            <Route path='/welcome/new-user'><p>Welcome New User</p></Route>
        </>
    )
}

export default Welcome;