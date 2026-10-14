
function FeatureCard({ feature }) {
  return (
    <div className="text-center flex flex-col gap-2 back p-10 rounded-3xl shadow-2xl hover:shadow-lg transition-all">
      <h2>{feature.icon}</h2>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  )
}
export default FeatureCard