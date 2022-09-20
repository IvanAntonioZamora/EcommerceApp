import { createContext, useState } from "react"

const Notification = ({mesagge, severity}) =>{

    const backGroundColor = {
      success: 'alert-success',
      danger: 'alert-danger',
      warning: 'alert-warning',
      default: 'alert-primary' 
    }
  
    const notificationStyle = {
      alert: backGroundColor[severity] +' alert alert-dismissible fade show'
    }

    if (mesagge === '') return
    
    return(
      <div className={notificationStyle.alert} role="alert">
        {mesagge}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [mesagge, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (svt, msg) =>{
        setSeverity(svt)
        setMessage(msg)
        setTimeout(() =>{
            setMessage('')
        },2000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification mesagge={mesagge} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}
export default NotificationContext