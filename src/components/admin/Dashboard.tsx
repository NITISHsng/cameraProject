import React, { useState , useEffect } from 'react';
import { 
  Users, BarChart3, Package, UserCheck, TrendingUp, TrendingDown, 
  Search, MapPin, Phone, Mail, User, Calendar, Star, Award
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [pincodeFilter, setPincodeFilter] = useState('');

  const [hiringRequests, setHiringRequests] = useState<any[]>([]);
  const [ teamMember , setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

async function getAllHiringRequests() {
  try {
    const res = await fetch("/api/hiring", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch hiring requests: ${res.status}`);
    }

    const data = await res.json();

    console.log("All Hiring Requests:", data.hiringRequests);

    setHiringRequests(data.hiringRequests || []);
  } catch (err) {
    console.error("Error fetching hiring requests:", err);
  } finally {
    setLoading(false);
  }
}
async function getAllTeamMembers() {
  try {
    const res = await fetch("/api/join_us", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch hiring requests: ${res.status}`);
    }

    const data = await res.json();

    console.log("All Hiring Requests:", data.joinUsApplicants);

    setTeamMembers(data.joinUsApplicants || []);
  } catch (err) {
    console.error("Error fetching hiring requests:", err);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    getAllHiringRequests();
    getAllTeamMembers();
  }, []);


  // Mock data
  const dashboardStats = {
    totalClients: 1250,
    totalTeamMembers: 45,
    totalProjects: 823,
    equipmentPartners: 23,
    newTeamMembers: 5,
    newClients: 45,
    newPartners: 3,
    completedProjects: 23
  };

  const teamMembers = [
    { 
      id: 'TM001', 
      name: 'John Smith', 
      area: 'Downtown', 
      pincode: '110001', 
      role: 'Cameraman', 
      phone: '+91 98765 43210', 
      email: 'john@AsanCapture.com', 
      joinDate: '2024-01-15', 
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.8,
      experience: '5+ years',
      totalProjects: 23,
      skills: ['Wedding Photography', 'Event Videography', 'Drone Operation', 'Portrait Photography', 'Commercial Shoots']
    },
    { 
      id: 'TM002', 
      name: 'Sarah Johnson', 
      area: 'Midtown', 
      pincode: '110002', 
      role: 'Editor', 
      phone: '+91 98765 43211', 
      email: 'sarah@AsanCapture.com', 
      joinDate: '2024-02-20', 
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.9,
      experience: '4+ years',
      totalProjects: 18,
      skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics', 'Sound Design']
    },
    { 
      id: 'TM003', 
      name: 'Mike Chen', 
      area: 'Uptown', 
      pincode: '110003', 
      role: 'Cameraman', 
      phone: '+91 98765 43212', 
      email: 'mike@AsanCapture.com', 
      joinDate: '2024-03-10', 
      status: 'inactive',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.6,
      experience: '3+ years',
      totalProjects: 15,
      skills: ['Commercial Shoots', 'Product Photography', 'Studio Lighting', 'Fashion Photography']
    },
    { 
      id: 'TM004', 
      name: 'Emily Davis', 
      area: 'Westside', 
      pincode: '110004', 
      role: 'Equipment Partner', 
      phone: '+91 98765 43213', 
      email: 'emily@AsanCapture.com', 
      joinDate: '2024-01-25', 
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.7,
      experience: '6+ years',
      totalProjects: 12,
      skills: ['Equipment Rental', 'Camera Maintenance', 'Lighting Setup', 'Audio Equipment', 'Technical Support']
    },
    { 
      id: 'TM005', 
      name: 'David Wilson', 
      area: 'Eastside', 
      pincode: '110005', 
      role: 'Cameraman', 
      phone: '+91 98765 43214', 
      email: 'david@AsanCapture.com', 
      joinDate: '2024-02-15', 
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.5,
      experience: '4+ years',
      totalProjects: 20,
      skills: ['Event Coverage', 'Live Streaming', 'Documentary Filming', 'Sports Photography', 'Aerial Cinematography']
    }
  ];

  const serviceLocations = [
    { 
      id: 'LOC001', 
      city: 'New Delhi', 
      area: 'Central Delhi', 
      pincode: '110001', 
      projects: 45, 
      status: 'Active'
    },
    { 
      id: 'LOC002', 
      city: 'Mumbai', 
      area: 'Bandra', 
      pincode: '400050', 
      projects: 38, 
      status: 'Active'
    },
    { 
      id: 'LOC003', 
      city: 'Bangalore', 
      area: 'Koramangala', 
      pincode: '560034', 
      projects: 32, 
      status: 'Active'
    },
    { 
      id: 'LOC004', 
      city: 'Chennai', 
      area: 'T. Nagar', 
      pincode: '600017', 
      projects: 28, 
      status: 'Active'
    },
    { 
      id: 'LOC005', 
      city: 'Hyderabad', 
      area: 'Banjara Hills', 
      pincode: '500034', 
      projects: 25, 
      status: 'Active'
    },
    { 
      id: 'LOC006', 
      city: 'Pune', 
      area: 'Koregaon Park', 
      pincode: '411001', 
      projects: 22, 
      status: 'Inactive'
    }
  ];

  const filteredTeamMembers = teamMembers.filter(member => {
    return (
      member.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      member.area.toLowerCase().includes(areaFilter.toLowerCase()) &&
      member.pincode.includes(pincodeFilter)
    );
  });

  const filteredLocations = serviceLocations.filter(location => {
    return (
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.pincode.includes(searchTerm)
    );
  });

  const toggleMemberStatus = (memberId: string) => {
    console.log(`Toggle status for member: ${memberId}`);
  };

  return (
    <div className="space-y-8">
      {/* Time Filter */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
        <div className="flex space-x-2">
          {['week', 'month', 'year'].map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                timeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Last {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stats with Colorful Icons */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{hiringRequests.length}</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Total Clients</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <UserCheck className="h-6 w-6 text-white" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{teamMember.length}</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Total Team Members</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{dashboardStats.totalProjects}</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Total Projects Completed</div>
        </div>

        {/* <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Package className="h-6 w-6 text-white" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{dashboardStats.equipmentPartners}</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Equipment Partners</div>
        </div> */}
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{dashboardStats.newTeamMembers}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">New Team Members</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">Last {timeFilter}</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">{dashboardStats.newClients}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">New Clients</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">Last {timeFilter}</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">{dashboardStats.newPartners}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Equipment Partners</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">Last {timeFilter}</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">{dashboardStats.completedProjects}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">Last {timeFilter}</div>
          </div>
        </div>
      </div>

      {/* Two Part Display */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Part A - Team Members with New Design */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
              <Users className="h-6 w-6 mr-2 text-purple-600" />
              Team Members
            </h3>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Filter by name"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="text"
              placeholder="Filter by area"
              value={areaFilter}
              onChange={(e) => setAreaFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="text"
              placeholder="Filter by pincode"
              value={pincodeFilter}
              onChange={(e) => setPincodeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredTeamMembers.map((member) => (
              <div key={member.id} className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 p-4">
                {/* Top Section: Logo/Name with ID (left) and Status/Rating (right) */}
                <div className="flex items-start justify-between mb-4">
                  {/* Left: Avatar + Name + ID */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 dark:text-white">{member.name}</h4>
                      <div className="text-sm text-gray-600 dark:text-gray-300">ID: {member.id}</div>
                    </div>
                  </div>
                  
                  {/* Right: Status + Rating */}
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => toggleMemberStatus(member.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        member.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30'
                      }`}
                    >
                      {member.status === 'active' ? 'Active' : 'Inactive'}
                    </button>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-800 dark:text-white">{member.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Location and Pincode */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{member.area}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">PIN:</span> {member.pincode}
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Phone className="h-4 w-4 text-green-500" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <span className="truncate">{member.email}</span>
                  </div>
                </div>

                {/* Experience and Total Projects */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Award className="h-4 w-4 text-indigo-500" />
                    <span>{member.totalProjects} projects</span>
                  </div>
                </div>

                {/* All Skills */}
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B - Service Locations with Status in Top Right */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-green-600" />
              Service Locations
            </h3>
          </div>

          {/* Search Filter */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city, area, or pincode"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredLocations.map((location) => (
              <div key={location.id} className="relative bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 p-4">
                {/* Status Badge - Top Right */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    location.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                  }`}>
                    {location.status}
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="flex-1 pr-16">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{location.city}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{location.area}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span><span className="font-medium">Pincode:</span> {location.pincode}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span><span className="font-medium">Projects:</span> {location.projects}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default Dashboard;