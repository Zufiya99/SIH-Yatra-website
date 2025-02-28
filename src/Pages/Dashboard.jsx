import { useState } from "react";
import {
  BarChart,
  PieChart,
  LineChart,
  Bar,
  Pie,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Users,
  TrendingUp,
  Map,
  Calendar,
  Activity,
} from "lucide-react";

// Sample data for charts
const touristData = [
  { name: "USA", tourists: 4000 },
  { name: "France", tourists: 3000 },
  { name: "China", tourists: 2000 },
  { name: "Italy", tourists: 2780 },
  { name: "Spain", tourists: 1890 },
];

const demographicData = [
  { name: "18-24", value: 30 },
  { name: "25-34", value: 45 },
  { name: "35-44", value: 15 },
  { name: "45+", value: 10 },
];

const growthData = [
  { year: "2018", growth: 2.5 },
  { year: "2019", growth: 3.0 },
  { year: "2020", growth: 1.2 },
  { year: "2021", growth: 4.0 },
  { year: "2022", growth: 5.5 },
];

const revenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1900 },
  { month: "Mar", revenue: 1500 },
  { month: "Apr", revenue: 1800 },
  { month: "May", revenue: 2100 },
  { month: "Jun", revenue: 2500 },
];

const activityData = [
  { subject: "Adventure", A: 120, B: 110, fullMark: 150 },
  { subject: "Cultural", A: 98, B: 130, fullMark: 150 },
  { subject: "Relaxation", A: 86, B: 130, fullMark: 150 },
  { subject: "Shopping", A: 99, B: 100, fullMark: 150 },
  { subject: "Food", A: 85, B: 90, fullMark: 150 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("destinations");

  return (
    <div className="bg-Primary min-h-screen flex flex-col items-center justify-center p-8 text-white">
      {/* Dashboard Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-highlight mb-8 flex items-center"
      >
        <Globe className="mr-2" /> Tourism Dashboard
      </motion.h1>

      {/* Tabs for different views */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        <button
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center ${
            activeTab === "destinations"
              ? "bg-hoverEffect text-Primary shadow-lg"
              : "bg-Secondary text-white hover:bg-hoverEffect hover:text-Primary"
          }`}
          onClick={() => setActiveTab("destinations")}
        >
          <Map className="mr-2" /> Destinations
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center ${
            activeTab === "demographics"
              ? "bg-hoverEffect text-Primary shadow-lg"
              : "bg-Secondary text-white hover:bg-hoverEffect hover:text-Primary"
          }`}
          onClick={() => setActiveTab("demographics")}
        >
          <Users className="mr-2" /> Demographics
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center ${
            activeTab === "growth"
              ? "bg-hoverEffect text-Primary shadow-lg"
              : "bg-Secondary text-white hover:bg-hoverEffect hover:text-Primary"
          }`}
          onClick={() => setActiveTab("growth")}
        >
          <TrendingUp className="mr-2" /> Growth
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center ${
            activeTab === "revenue"
              ? "bg-hoverEffect text-Primary shadow-lg"
              : "bg-Secondary text-white hover:bg-hoverEffect hover:text-Primary"
          }`}
          onClick={() => setActiveTab("revenue")}
        >
          <Activity className="mr-2" /> Revenue
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center ${
            activeTab === "activities"
              ? "bg-hoverEffect text-Primary shadow-lg"
              : "bg-Secondary text-white hover:bg-hoverEffect hover:text-Primary"
          }`}
          onClick={() => setActiveTab("activities")}
        >
          <Calendar className="mr-2" /> Activities
        </button>
      </motion.div>

      {/* Charts based on active tab */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-6xl"
      >
        {activeTab === "destinations" && (
          <div className="bg-Secondary p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-highlight flex items-center">
              <Map className="mr-2" /> Top Tourist Destinations
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={touristData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2c3e50" />
                <XAxis dataKey="name" stroke="#FFD700" />
                <YAxis stroke="#FFD700" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#112240",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend wrapperStyle={{ color: "#FFD700" }} />
                <Bar dataKey="tourists" fill="#64ffda" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === "demographics" && (
          <div className="bg-Secondary p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-highlight flex items-center">
              <Users className="mr-2" /> Visitor Demographics
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={demographicData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#64ffda"
                  label
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#112240",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend wrapperStyle={{ color: "#FFD700" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === "growth" && (
          <div className="bg-Secondary p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-highlight flex items-center">
              <TrendingUp className="mr-2" /> Annual Growth Rate
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2c3e50" />
                <XAxis dataKey="year" stroke="#FFD700" />
                <YAxis stroke="#FFD700" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#112240",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend wrapperStyle={{ color: "#FFD700" }} />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="#64ffda"
                  strokeWidth={3}
                  dot={{ fill: "#FFD700", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === "revenue" && (
          <div className="bg-Secondary p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-highlight flex items-center">
              <Activity className="mr-2" /> Monthly Revenue
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2c3e50" />
                <XAxis dataKey="month" stroke="#FFD700" />
                <YAxis stroke="#FFD700" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#112240",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend wrapperStyle={{ color: "#FFD700" }} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#64ffda"
                  fill="#64ffda"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === "activities" && (
          <div className="bg-Secondary p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-highlight flex items-center">
              <Calendar className="mr-2" /> Tourist Activities
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart outerRadius={150} data={activityData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="#FFD700" />
                <PolarRadiusAxis stroke="#FFD700" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#112240",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend wrapperStyle={{ color: "#FFD700" }} />
                <Radar
                  name="Tourist Preferences"
                  dataKey="A"
                  stroke="#64ffda"
                  fill="#64ffda"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}
      </motion.div>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="mt-8"
      >
        <button className="bg-hoverEffect text-Primary font-semibold px-6 py-3 flex items-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Explore More <ArrowUpRight className="ml-2" />
        </button>
      </motion.div>
    </div>
  );
}
