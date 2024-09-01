export const getTickets = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const tickets = await response.json();
    return tickets;
  } catch (err) {
    console.log(err);
  }
};
