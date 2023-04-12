import Auth from '../../utils/auth'

export const ButtonLogout = () => {
    return <>
    <button id='logout-btn'
    onClick={() => Auth.logout()}>Logout</button> 
    </>

}