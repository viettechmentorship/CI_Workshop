
import getHello from "../../component/getHello";
export default function Home() {
  const backendResponse = getHello().then((response) => {
    return response;
  }).catch((error) => {
    console.error("Error fetching data from backend:", error);
    return "Error fetching data from backend";
  });
  const yourName = "James Doe"; // Replace with your name
  return (
    <div>
      <h1>Welcome to the Frontend {yourName}!</h1>
      <p>{backendResponse}</p>
      <p>This is a simple frontend application.</p>
      <p>It fetches data from the backend and displays it here.</p>
      <p>Enjoy your stay!</p>
    </div>
  );
}
