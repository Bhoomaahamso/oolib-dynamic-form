import './App.css';
import { useQuery } from '@tanstack/react-query'
import FormComponent from './component/FormComponent';

function App() {
  const getForm = async () => {
    const response = await fetch(
      "http://localhost:4000/api/form"
    );
    const val = await response.json();
    return val;
  };

  const { data, error, isLoading } = useQuery({ queryKey: ["form"], queryFn: getForm });

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="app">
      <FormComponent formData={data.data} />
    </div>
  );
}

export default App;
