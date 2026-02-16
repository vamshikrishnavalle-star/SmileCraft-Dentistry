
import React, { useState } from 'react';
import { CLINIC_DETAILS } from '../constants';

const Book: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    newPatient: 'yes',
    notes: '',
    insurance: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (name: string, value: any) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full name is required';
        else if (value.trim().length < 2) error = 'Name is too short';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Invalid email address';
        break;
      case 'phone':
        // Basic Indian phone validation: 10 digits, optionally starting with +91
        const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        if (!value.trim()) error = 'Phone number is required';
        else if (!phoneRegex.test(value.replace(/[\s\-]/g, ''))) error = 'Invalid phone number';
        break;
      case 'treatment':
        if (!value) error = 'Please select a treatment';
        break;
      case 'date':
        if (!value) error = 'Please select a date';
        else {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selectedDate < today) error = 'Date cannot be in the past';
        }
        break;
      case 'time':
        if (!value) error = 'Please select a time';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData({ ...formData, [name]: val });

    // Validate in real-time if already touched
    if (touched[name]) {
      const error = validate(name, val);
      setErrors({ ...errors, [name]: error });
    }
  };

  const isFormValid = () => {
    const requiredFields = ['name', 'email', 'phone', 'treatment', 'date', 'time'];
    const newErrors: Record<string, string> = {};
    let isValid = true;

    requiredFields.forEach(field => {
      const error = validate(field, (formData as any)[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(requiredFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="pt-48 pb-32 max-w-2xl mx-auto px-4 text-center animate-fadeIn">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Request Received!</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you, {formData.name.split(' ')[0]}. Our treatment coordinator in LB Nagar will call you shortly to confirm your consultation for {formData.date} at {formData.time}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
            onClick={() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    treatment: '',
                    date: '',
                    time: '',
                    newPatient: 'yes',
                    notes: '',
                    insurance: false
                });
                setErrors({});
                setTouched({});
            }}
            className="bg-medical-blue text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
            Book Another
            </button>
            <a 
                href={CLINIC_DETAILS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
                Add to Calendar
            </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-charcoal mb-6">Start Your Smile Journey in Hyderabad</h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">Visit our modern clinic in LB Nagar for a risk-free cosmetic consultation.</p>
          
          {/* External Booking Link Callout */}
          <div className="bg-[#D1F2F7] p-8 rounded-[40px] max-w-3xl mx-auto mb-16 shadow-xl border border-white/50 animate-fadeIn">
            <h3 className="text-2xl font-bold mb-4">Prefer Instant Booking?</h3>
            <p className="text-gray-600 mb-6">Skip the form and pick a specific time slot that works for you right now.</p>
            <a 
                href={CLINIC_DETAILS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 bg-[#1A1A1A] text-white rounded-full font-bold text-lg hover:bg-black transition-all group"
            >
                Schedule Meeting Instantly
                <svg className="w-5 h-5 ml-3 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-blue-50 border border-gray-100">
            <div className="mb-8">
                <h3 className="text-xl font-bold text-charcoal">Custom Inquiry Form</h3>
                <p className="text-sm text-gray-500">Fill this out if you have specific questions or insurance details to share.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full p-4 bg-gray-50 border rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none ${errors.name && touched.name ? 'border-red-500' : 'border-transparent'}`}
                  />
                  {errors.name && touched.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="rahul@example.com"
                    className={`w-full p-4 bg-gray-50 border rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none ${errors.email && touched.email ? 'border-red-500' : 'border-transparent'}`}
                  />
                  {errors.email && touched.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 98765 43210"
                  className={`w-full p-4 bg-gray-50 border rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none ${errors.phone && touched.phone ? 'border-red-500' : 'border-transparent'}`}
                />
                {errors.phone && touched.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Interested Treatment</label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-4 bg-gray-50 border rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none ${errors.treatment && touched.treatment ? 'border-red-500' : 'border-transparent'}`}
                >
                  <option value="">Select Treatment</option>
                  <option value="veneers">Porcelain Veneers</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="invisalign">Invisalign</option>
                  <option value="makeover">Smile Makeover</option>
                  <option value="general">General Consultation</option>
                </select>
                {errors.treatment && touched.treatment && <p className="mt-1 text-xs text-red-500 font-medium">{errors.treatment}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Preferred Date</label>
                  <input
                    name="date"
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 bg-gray-50 border rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none ${errors.date && touched.date ? 'border-red-500' : 'border-transparent'}`}
                  />
                  {errors.date && touched.date && <p className="mt-1 text-xs text-red-500 font-medium">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Preferred Time</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 bg-gray-50 border rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none ${errors.time && touched.time ? 'border-red-500' : 'border-transparent'}`}
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="evening">Evening (4pm - 8pm)</option>
                  </select>
                  {errors.time && touched.time && <p className="mt-1 text-xs text-red-500 font-medium">{errors.time}</p>}
                </div>
              </div>

              <div className="flex items-center space-x-4 py-2">
                <span className="text-sm font-bold text-gray-400">New Patient?</span>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="newPatient" value="yes" checked={formData.newPatient === 'yes'} onChange={handleChange} className="mr-2" /> 
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="newPatient" value="no" checked={formData.newPatient === 'no'} onChange={handleChange} className="mr-2" /> 
                  <span className="text-sm">No</span>
                </label>
              </div>

              <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Notes / Questions (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us more about your smile goals..."
                    className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue transition-all outline-none resize-none"
                  ></textarea>
              </div>

              <div>
                <label className="flex items-center cursor-pointer group">
                  <input 
                    name="insurance"
                    type="checkbox" 
                    checked={formData.insurance} 
                    onChange={handleChange} 
                    className="mr-2 w-4 h-4 rounded border-gray-300 text-medical-blue focus:ring-medical-blue" 
                  />
                  <span className="text-sm text-gray-600 group-hover:text-charcoal transition-colors">I have dental insurance</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1A1A1A] hover:bg-black text-white rounded-2xl font-bold shadow-xl shadow-gray-200 transition-all flex items-center justify-center group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <>
                        Request My Free Consultation
                        <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Clinic Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#D1F2F7] text-[#1A1A1A] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Phone</p>
                      <p className="text-gray-500 font-medium">{CLINIC_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#FCE4EC] text-[#1A1A1A] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Office Hours</p>
                      <p className="text-gray-500 font-medium">{CLINIC_DETAILS.hours.weekdays}</p>
                      <p className="text-gray-500 font-medium text-sm">Sat: {CLINIC_DETAILS.hours.saturday}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E8EAF6] text-[#1A1A1A] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Address</p>
                      <p className="text-gray-500 font-medium leading-relaxed">{CLINIC_DETAILS.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[40px] overflow-hidden shadow-2xl h-80 bg-gray-100 relative group border-4 border-white">
                <iframe
                  title="Office Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2323490333333!2d78.5471!3d17.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98fb!2sLB%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
