"use client"

import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for the dashboard
  const stats = [
    { title: "Total Audits", value: "1,284", change: "+12%", icon: "📊" },
    { title: "Pending Audits", value: "23", change: "-4%", icon: "⏳" },
    { title: "Completed", value: "842", change: "+19%", icon: "✅" },
    { title: "Issues Found", value: "342", change: "+7%", icon: "⚠️" },
  ]

  const recentAudits = [
    {
      id: "AUD-2023-1284",
      name: "Annual Financial Review",
      department: "Finance",
      status: "Completed",
      date: "Mar 28, 2023",
    },
    {
      id: "AUD-2023-1283",
      name: "IT Security Assessment",
      department: "IT",
      status: "In Progress",
      date: "Mar 27, 2023",
    },
    { id: "AUD-2023-1282", name: "Compliance Check", department: "Legal", status: "Completed", date: "Mar 26, 2023" },
    {
      id: "AUD-2023-1281",
      name: "Vendor Risk Assessment",
      department: "Procurement",
      status: "Pending",
      date: "Mar 25, 2023",
    },
    { id: "AUD-2023-1280", name: "Data Privacy Audit", department: "IT", status: "Completed", date: "Mar 24, 2023" },
  ]

  // Timeline data for simple chart
  const timelineData = [24, 32, 45, 39, 52, 48, 61]
  const maxValue = Math.max(...timelineData)

  // Status data for simple chart
  const statusData = [
    { name: "Completed", value: 842, percentage: 65, color: "#4ade80" },
    { name: "In Progress", value: 419, percentage: 32, color: "#f97316" },
    { name: "Pending", value: 23, percentage: 3, color: "#a855f7" },
  ]

  // Type data for simple chart
  const typeData = [
    { name: "Compliance", value: 540, percentage: 42, color: "#3b82f6" },
    { name: "Security", value: 320, percentage: 25, color: "#ef4444" },
    { name: "Financial", value: 280, percentage: 22, color: "#10b981" },
    { name: "Operational", value: 144, percentage: 11, color: "#f59e0b" },
  ]

  return (
    <>
    <div className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <header className="flex items-center h-16 px-4 border-b bg-[#37479C] text-white">
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-xl">🛡️</span>
          <span>Audit Pro</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button className="px-3 py-1.5 hover:bg-[#4a5ab3] rounded-md transition-colors">👥 Team</button>
          <button className="px-3 py-1.5 hover:bg-[#4a5ab3] rounded-md transition-colors">📄 Reports</button>
          <button className="px-3 py-1.5 bg-white text-[#37479C] rounded-md hover:bg-gray-100 transition-colors">
            New Audit
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Audit Dashboard</h2>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border rounded-md hover:bg-gray-50 transition-colors">🔍 Filter</button>
            <div className="relative">
              <input
                type="search"
                placeholder="Search audits..."
                className="w-[200px] md:w-[260px] px-3 py-1.5 pl-8 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-2.5 top-2.5">🔍</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="space-y-4">
          <div className="flex border-b">
            {["overview", "analytics", "reports", "settings"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium capitalize ${
                  activeTab === tab ? "border-b-2 border-[#37479C] text-[#37479C]" : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="p-6 bg-white rounded-lg border shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                      <span className="text-xl">{stat.icon}</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Timeline Chart */}
                <div className="col-span-4 p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-medium">Audit Timeline</h3>
                  <p className="text-sm text-gray-500">Audit activity over the last 30 days</p>
                  <div className="mt-4 h-[200px] flex items-end justify-between gap-2">
                    {timelineData.map((value, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-12 bg-[#37479C] rounded-t-sm"
                          style={{
                            height: `${(value / maxValue) * 150}px`,
                            opacity: 0.7 + (index / timelineData.length) * 0.3,
                          }}
                        ></div>
                        <span className="text-xs mt-1">Mar {(index + 1) * 5}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Chart */}
                <div className="col-span-3 p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-medium">Audit Status</h3>
                  <p className="text-sm text-gray-500">Distribution of audit statuses</p>
                  <div className="mt-6 space-y-4">
                    {statusData.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full"
                            style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Type Chart */}
                <div className="col-span-3 p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-medium">Audit Types</h3>
                  <p className="text-sm text-gray-500">Distribution by audit category</p>
                  <div className="mt-6 space-y-4">
                    {typeData.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full"
                            style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Audits Table */}
                <div className="col-span-4 p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-medium">Recent Audits</h3>
                  <p className="text-sm text-gray-500">Latest audit activities</p>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-2 text-left font-medium">ID</th>
                          <th className="pb-2 text-left font-medium">Audit Name</th>
                          <th className="pb-2 text-left font-medium">Department</th>
                          <th className="pb-2 text-left font-medium">Status</th>
                          <th className="pb-2 text-left font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentAudits.map((audit) => (
                          <tr key={audit.id} className="border-b">
                            <td className="py-3 font-medium">{audit.id}</td>
                            <td className="py-3">{audit.name}</td>
                            <td className="py-3">{audit.department}</td>
                            <td className="py-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  audit.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : audit.status === "In Progress"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {audit.status}
                              </span>
                            </td>
                            <td className="py-3">{audit.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "overview" && (
            <div className="p-6 bg-white rounded-lg border shadow-sm h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">
                  {activeTab === "analytics" ? "📊" : activeTab === "reports" ? "📄" : "⚙️"}
                </div>
                <h3 className="text-xl font-semibold capitalize">{activeTab} Dashboard</h3>
                <p className="text-sm text-gray-500 mt-2">{activeTab} view coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

