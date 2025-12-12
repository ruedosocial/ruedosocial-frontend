export default function DashboardSkeleton() {
  return (
    <div className="rs-dashboard">
      <div className="rs-skeleton skeleton-title"></div>

      <div className="rs-dashboard-grid">
        <div className="rs-skeleton skeleton-card"></div>
        <div className="rs-skeleton skeleton-card"></div>
        <div className="rs-skeleton skeleton-card"></div>
        <div className="rs-skeleton skeleton-card"></div>
      </div>
    </div>
  );
}
