import { useQuery } from "@tanstack/react-query";

async function fetchUsers() {
  const res = await fetch("http://localhost:4000/api/users");
  if (!res.ok) throw new Error("Ошибка загрузки данных");
  return res.json();
}

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Список пользователей</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
