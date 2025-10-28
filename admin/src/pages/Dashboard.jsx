import React, { useState, useEffect } from 'react'
import { Users, FileText, TrendingUp, DollarSign, Calendar, AlertCircle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const [stats, setStats] = useState([])
  const [recentActivity, setRecentActivity] = useState([])
  const [caseData, setCaseData] = useState([])

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      // Stats data
      setStats([
        {
          icon: Users,
          value: '45',
          label: 'Active Clients',
          change: '+12%',
          changeType: 'positive',
          color: 'text-blue-600',
          bgColor: 'bg-blue-100'
        },
        {
          icon: FileText,
          value: '28',
          label: 'Open Cases',
          change: '+5%',
          changeType: 'positive',
          color: 'text-green-600',
          bgColor: 'bg-green-100'
        },
        {
          icon: TrendingUp,
          value: 'KES 2.4M',
          label: 'Revenue This Month',
          change: '+23%',
          changeType: 'positive',
          color: 'text-purple-600',
          bgColor: 'bg-purple-100'
        },
        {
          icon: DollarSign,
          value: '94%',
          label: 'Client Satisfaction',
          change: '+2%',
          changeType: 'positive',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100'
        }
      ])

      // Recent activity
      setRecentActivity([
        { action: 'New Case Filed', client: 'John Doe', time: '2 hours ago', type: 'case' },
        { action: 'Consultation Completed', client: 'Jane Smith', time: '5 hours ago', type: 'consultation' },
        { action: 'Document Signed', client: 'ABC Corporation', time: '1 day ago', type: 'document' },
        { action: 'Payment Received', client: 'XYZ Ltd', time: '2 days ago', type: 'payment' }
      ])

      // Case type distribution
      setCaseData([
        { name: 'Corporate', value: 35 },
        { name: 'Real Estate', value: 25 },
        { name: 'Family', value: 20 },
        { name: 'Criminal', value: 15 },
        { name: 'Employment', value: 5 }
      ])
    }

    loadData()
  }, [])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-600">Last updated: Today</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="admin-card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className={`text-xs font-medium mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'case' ? 'bg-blue-500' :
                    activity.type === 'consultation' ? 'bg-green-500' :
                    activity.type === 'document' ? 'bg-yellow-500' : 'bg-purple-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-gray-900">{activity.action}</div>
                    <div className="text-sm text-gray-600">Client: {activity.client}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Distribution */}
        <div className="admin-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={caseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {caseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="admin-card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
        <div className="space-y-3">
          {[
            { client: 'Sarah Johnson', type: 'Initial Consultation', date: 'Today, 2:00 PM', lawyer: 'James Njoroge' },
            { client: 'Mike Peterson', type: 'Case Review', date: 'Tomorrow, 10:00 AM', lawyer: 'Sarah Wambui' },
            { client: 'Tech Solutions Ltd', type: 'Contract Signing', date: 'Dec 15, 3:30 PM', lawyer: 'David Kimani' }
          ].map((appointment, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">{appointment.client}</div>
                  <div className="text-sm text-gray-600">{appointment.type} • {appointment.lawyer}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">{appointment.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard