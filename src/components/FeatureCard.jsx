
function FeatureCard({ feature }) {
  return (
    <div className="text-center flex flex-col gap-2  p-10 rounded-3xl shadow-2xl hover:shadow-lg transition-all card">
      <h2 className="text-2xl">{feature.icon}</h2>
      <h3 className="font-bold tracking-wider">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  )
}
export default FeatureCard