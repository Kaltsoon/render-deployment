export function getAllMessages() {
  return fetch("/api/messages").then((response) => response.json());
}

export function createMessage(message) {
  return fetch("/api/messages", {
    method: "post",
    body: JSON.stringify(message),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create the message");
    }

    return response.json();
  });
}
