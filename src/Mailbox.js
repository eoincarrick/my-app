import React from "react";
setTimeout(Mailbox, 2000);

function Mailbox() {
  const unreadMessages = ["Rocky", "Carrick", "john", "Sam", "Terry"];
  return (
    <div>
      <h1>Status</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread massages.</h2>
      )}
    </div>
  );
}

export default Mailbox;
