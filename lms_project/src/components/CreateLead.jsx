import React from 'react'
import { useState } from 'react';

function CreateLead() {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    email: '',
    companyName: '',
    companyNameOthers: '',
    industrySegment: '',
    contactName: '',
    contactNumber: '',
    contactEmail: '',
    uidai: '',
    pan: '',
    gst: '',
    cin: '',
    tin: '',
    crn: '',
    state: '',
    district: '',
    pincode: '',
    city: '',
    location: '',
    addressLine1: '',
    addressLine2: '',
    companyStatus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/create-lead/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Lead created successfully');
    } else {
      alert('Failed to create lead');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-3">Company Details</h5>
        <form onSubmit={handleSubmit}>

          {/* Example field */}
          <div className="form-group">
            <label>Mobile Number<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="mobileNumber"
              className="form-control"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Id<span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company Name<span style={{ color: 'red' }}>*</span></label>
            <select
              name="companyName"
              className="form-control"
              value={formData.companyName}
              onChange={handleChange}
            >
              <option value="">Select Company</option>
              <option value="0">Others</option>
            </select>

            {formData.companyName === '0' && (
              <input
                type="text"
                name="companyNameOthers"
                className="form-control mt-2"
                value={formData.companyNameOthers}
                onChange={handleChange}
              />
            )}
          </div>

          {/* Add rest of the form fields here in similar way */}
          <div className="form-group">
            <label>Company PAN<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="pan"
              className="form-control"
              value={formData.pan}
              onChange={handleChange}
              maxLength="10"
            />
          </div>

          <div className="form-group mt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateLead;
