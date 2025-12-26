import HealthStatus from "./components/HealthStatus";

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>DevOps Health Dashboard</h1>
      <HealthStatus />
    </main>
  );
}
