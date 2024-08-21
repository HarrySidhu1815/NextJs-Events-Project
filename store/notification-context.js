import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState(null);

  
    useEffect(() => {
        if (
            activeNotification &&
            (activeNotification.status === "success" ||
              activeNotification.status === "error")
          ) {
            const timer = setTimeout(()=> {
                setActiveNotification(null)
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
          }
    }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }
  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const notificationCtx = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={notificationCtx}>
      {children}
    </NotificationContext.Provider>
  );
}
export default NotificationContext;
