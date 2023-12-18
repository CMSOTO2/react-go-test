import { useQuery } from 'react-query';

interface ApiResponse {
  message: string;
}

function App() {
  const { data, isLoading, error } = useQuery<ApiResponse, Error>(
    'hello',
    async () => {
      const response = await fetch('http://localhost:5000/api/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  );

  const messageFromApi = () => {
    if (data) {
      return `${data.message}`;
    }
    if (isLoading) {
      return 'Loading...';
    }

    if (error) {
      return `${error.message}`;
    }
  };

  return (
    <div>
      <h1>Your React App</h1>
      <p>Message from server: {messageFromApi()}</p>
    </div>
  );
}

export default App;
