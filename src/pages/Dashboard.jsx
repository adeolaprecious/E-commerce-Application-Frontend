const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">Total Sales: $5,200</div>
        <div className="bg-white shadow p-4 rounded">Orders: 120</div>
        <div className="bg-white shadow p-4 rounded">Customers: 80</div>
      </div>
    </div>
  );
};

export default Dashboard;
