import getHello from "../../component/getHello";
export default function Home() {
  const backendResponse = getHello();
  const yourName = "John Doe"; // Replace with your name
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
