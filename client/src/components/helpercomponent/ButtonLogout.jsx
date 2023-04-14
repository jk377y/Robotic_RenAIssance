import Auth from '../../utils/auth'

export const ButtonLogout = () => {
   
    return <>
    <button id='logout-btn'
    onClick={() => {
        Auth.logout()
        window.location='/'}}>Logout</button> 
    </>

}