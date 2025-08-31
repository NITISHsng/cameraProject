import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, User, Phone, Mail, Filter, Search, 
  Eye, Edit, CheckCircle, XCircle, AlertCircle, Plus,
  Camera, Video, Edit3, Package, X, Star, DollarSign
} from 'lucide-react';

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  // Mock bookings data
  const bookings = [
    {
      id: 'BK001',
      clientName: 'Sarah & John Wedding',
      email: 'sarah.johnson@email.com',
      phone: '+91 98765 43210',
      service: 'Complete Event',
      eventType: 'Wedding',
      eventDate: '2024-02-15',
      startTime: '10:00',
      endTime: '22:00',
      location: 'Grand Palace Hotel, Mumbai',
      status: 'confirmed',
      amount: '₹1,20,000',
      cameramen: 3,
      createdAt: '2024-01-10',
      notes: 'Traditional Indian wedding with 500 guests. Requires drone coverage and live streaming.',
      requirements: ['Photography', 'Videography', 'Drone Coverage', 'Live Streaming'],
      assignedTeam: ['Rajesh Kumar (Lead)', 'Priya Sharma (Editor)', 'Amit Patel (Drone)'],
      paymentStatus: 'Advance Paid',
      advanceAmount: '₹60,000',
      remainingAmount: '₹60,000'
    },
    {
      id: 'BK002',
      clientName: 'TechStart Inc.',
      email: 'events@techstart.com',
      phone: '+91 98765 43211',
      service: 'Cameraman',
      eventType: 'Corporate Event',
      eventDate: '2024-02-20',
      startTime: '09:00',
      endTime: '17:00',
      location: 'Convention Center, Delhi',
      status: 'pending',
      amount: '₹45,000',
      cameramen: 2,
      createdAt: '2024-01-12',
      notes: 'Product launch event with live streaming requirement.',
      requirements: ['Videography', 'Live Streaming', 'Audio Recording'],
      assignedTeam: ['Vikram Singh (Lead)', 'Sneha Reddy (Support)'],
      paymentStatus: 'Pending',
      advanceAmount: '₹0',
      remainingAmount: '₹45,000'
    },
    {
      id: 'BK003',
      clientName: 'Priya Birthday Party',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43212',
      service: 'Equipment Rental',
      eventType: 'Party',
      eventDate: '2024-02-18',
      startTime: '18:00',
      endTime: '23:00',
      location: 'Home, Bangalore',
      status: 'completed',
      amount: '₹25,000',
      cameramen: 1,
      createdAt: '2024-01-08',
      notes: '25th birthday celebration with family and friends.',
      requirements: ['Photography', 'Basic Videography'],
      assignedTeam: ['Mike Chen (Cameraman)'],
      paymentStatus: 'Completed',
      advanceAmount: '₹25,000',
      remainingAmount: '₹0'
    },
    {
      id: 'BK004',
      clientName: 'Music Video Production',
      email: 'director@musicprod.com',
      phone: '+91 98765 43213',
      service: 'Video Editing',
      eventType: 'Music Video',
      eventDate: '2024-02-25',
      startTime: '08:00',
      endTime: '20:00',
      location: 'Studio Complex, Chennai',
      status: 'cancelled',
      amount: '₹80,000',
      cameramen: 4,
      createdAt: '2024-01-15',
      notes: 'High-end music video with special effects and multiple locations.',
      requirements: ['Cinema Cameras', 'Professional Lighting', 'VFX', 'Color Grading'],
      assignedTeam: ['David Wilson (Lead)', 'Emily Davis (Equipment)', 'Sarah Johnson (Editor)'],
      paymentStatus: 'Refunded',
      advanceAmount: '₹0',
      remainingAmount: '₹0'
    },
    {
      id: 'BK005',
      clientName: 'Corporate Training',
      email: 'hr@company.com',
      phone: '+91 98765 43214',
      service: 'Complete Event',
      eventType: 'Corporate Event',
      eventDate: '2024-03-01',
      startTime: '09:00',
      endTime: '18:00',
      location: 'Office Premises, Pune',
      status: 'confirmed',
      amount: '₹60,000',
      cameramen: 2,
      createdAt: '2024-01-18',
      notes: 'Training session recording for internal use and future reference.',
      requirements: ['Multi-Camera Setup', 'Audio Recording', 'Screen Recording'],
      assignedTeam: ['Rajesh Kumar (Lead)', 'Priya Sharma (Support)'],
      paymentStatus: 'Advance Paid',
      advanceAmount: '₹30,000',
      remainingAmount: '₹30,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'Cameraman':
        return <Camera className="h-4 w-4" />;
      case 'Equipment Rental':
        return <Video className="h-4 w-4" />;
      case 'Video Editing':
        return <Edit3 className="h-4 w-4" />;
      case 'Complete Event':
        return <Package className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === '' || booking.status === statusFilter;
    const matchesService = serviceFilter === '' || booking.service === serviceFilter;
    const matchesDate = dateFilter === '' || booking.eventDate.includes(dateFilter);

    return matchesSearch && matchesStatus && matchesService && matchesDate;
  });

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  };

  // Working action handlers
  const handleViewBooking = (booking: any) => {
    setSelectedBooking(booking);
    setShowViewModal(true);
  };

  const handleEditBooking = (booking: any) => {
    setSelectedBooking(booking);
    setShowEditModal(true);
  };

  const handleAddBooking = () => {
    setShowAddModal(true);
  };

  const handleSaveBooking = () => {
    alert('Booking saved successfully!');
    setShowAddModal(false);
    setShowEditModal(false);
    setSelectedBooking(null);
  };

  const closeModals = () => {
    setShowAddModal(false);
    setShowViewModal(false);
    setShowEditModal(false);
    setSelectedBooking(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Bookings Management
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Manage all client bookings and event schedules
            </p>
          </div>
          <button 
            onClick={handleAddBooking}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Booking
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Total Bookings</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Confirmed</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Pending</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.completed}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Cancelled</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">All Services</option>
            <option value="Cameraman">Cameraman</option>
            <option value="Equipment Rental">Equipment Rental</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Complete Event">Complete Event</option>
          </select>
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button className="inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200">
            <Filter className="h-5 w-5 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Booking Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Client Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Event Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        {getServiceIcon(booking.service)}
                        <span className="font-medium text-gray-900 dark:text-white">{booking.id}</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{booking.service}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Created: {booking.createdAt}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{booking.clientName}</div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                        <Mail className="h-3 w-3" />
                        <span className="truncate max-w-32">{booking.email}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                        <Phone className="h-3 w-3" />
                        <span>{booking.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{booking.eventType}</div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                        <Calendar className="h-3 w-3" />
                        <span>{booking.eventDate}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-3 w-3" />
                        <span>{booking.startTime} - {booking.endTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate max-w-32">{booking.location}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      <span className="capitalize">{booking.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">{booking.amount}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{booking.cameramen} cameramen</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewBooking(booking)}
                        className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleEditBooking(booking)}
                        className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors duration-200"
                        title="Edit Booking"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Booking Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Add New Booking</h3>
              <button onClick={closeModals} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Client Name"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option value="">Select Service</option>
                <option value="cameraman">Cameraman</option>
                <option value="equipment">Equipment Rental</option>
                <option value="editing">Video Editing</option>
                <option value="complete">Complete Event</option>
              </select>
              <input
                type="date"
                placeholder="Event Date"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="Event Location"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={closeModals}
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveBooking}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200"
              >
                Create Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Booking Details Modal */}
      {showViewModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Booking Details - {selectedBooking.id}</h3>
              <button onClick={closeModals} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Basic Info */}
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Client Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-800 dark:text-white">{selectedBooking.clientName}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-600" />
                      <span className="text-gray-600 dark:text-gray-300">{selectedBooking.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-600 dark:text-gray-300">{selectedBooking.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Event Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {getServiceIcon(selectedBooking.service)}
                      <span className="font-medium text-gray-800 dark:text-white">{selectedBooking.service}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600 dark:text-gray-300">{selectedBooking.eventDate}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-600 dark:text-gray-300">{selectedBooking.startTime} - {selectedBooking.endTime}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <span className="text-gray-600 dark:text-gray-300">{selectedBooking.location}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Requirements</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBooking.requirements.map((req: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Status & Team */}
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Status & Payment</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Booking Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                        {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Total Amount:</span>
                      <span className="font-bold text-lg text-gray-800 dark:text-white">{selectedBooking.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Payment Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedBooking.paymentStatus === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                        selectedBooking.paymentStatus === 'Advance Paid' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {selectedBooking.paymentStatus}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Advance Paid:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedBooking.advanceAmount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Remaining:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedBooking.remainingAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Assigned Team</h4>
                  <div className="space-y-3">
                    {selectedBooking.assignedTeam.map((member: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-800 dark:text-white">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Additional Notes</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedBooking.notes}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <button 
                onClick={closeModals}
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
              <button 
                onClick={() => handleEditBooking(selectedBooking)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200"
              >
                Edit Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Booking Modal */}
      {showEditModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Booking - {selectedBooking.id}</h3>
              <button onClick={closeModals} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                defaultValue={selectedBooking.clientName}
                placeholder="Client Name"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                defaultValue={selectedBooking.email}
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="tel"
                defaultValue={selectedBooking.phone}
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <select 
                defaultValue={selectedBooking.service}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Cameraman">Cameraman</option>
                <option value="Equipment Rental">Equipment Rental</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Complete Event">Complete Event</option>
              </select>
              <input
                type="date"
                defaultValue={selectedBooking.eventDate}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="text"
                defaultValue={selectedBooking.location}
                placeholder="Event Location"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={closeModals}
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveBooking}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;