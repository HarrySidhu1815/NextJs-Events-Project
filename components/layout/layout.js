import React, { useContext } from "react";
import MainHeader from "./main-header";
import NotificationContext from "../../store/notification-context";
import Notification from "../UI/notification";

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          status={activeNotification.status}
          message={activeNotification.message}
        />
      )}
    </>
  );
}
