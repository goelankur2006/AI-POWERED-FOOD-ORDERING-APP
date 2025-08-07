import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    message: '',
    files: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm(prev => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'files') {
        for (let i = 0; i < value.length; i++) {
          formData.append('files', value[i]);
        }
      } else {
        formData.append(key, value);
      }
    });
    await axios.post('http://localhost:5000/api/contact', formData);
    alert('Submitted!');
  };

  return (
    <div className='container mt-5 order'>
      <div className='row'>
        <div className='col-lg-6'>
          <form className='mb-5 form' onSubmit={handleSubmit}>
            <div>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Name' className='form-control' required />
            </div>
            <div>
              <input type='email' name="email" value={form.email} onChange={handleChange} placeholder='Email' className='form-control' required />
            </div>
            <div>
              <input type='text' name="phone" value={form.phone} onChange={handleChange} placeholder='Phone No.' className='form-control' required />
            </div>
            <input type="text" name="city" value={form.city} onChange={handleChange} placeholder='City' className='form-control' required />
            <input type="text" name="state" value={form.state} onChange={handleChange} placeholder='State' className='form-control' required />
            <div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder='Message' className='form-control' required rows={4}></textarea>
            </div>
            <div>
              <label className='form-label mt-2'>Attach Files</label>
              <input type="file" className='form-control' multiple onChange={handleFileChange} />
            </div>
            <small className='text-muted d-block mt-2'>
              Note: We accept file sizes up to 1mb and in a jpeg, png or pdf format.
            </small>
            <button type='submit' className='btn btn-success mt-3'>Submit</button>
          </form>
        </div>
        
        {/* Center line */}
        <div className="col-lg-1 d-flex justify-content-center align-items-center">
          <div style={{
            width: '2px',
            height: '80%',
            background: '#ccc'
          }}></div>
        </div>

        {/* Right: Contact Info */}
        <div className='col-lg-5'>
          <div>
            <h5>Theobroma Foods Private Limited</h5>
            <p><strong>Registered Address:</strong><br />
              32/33 A, Deonar Village Road, Opp.<br />
              Metal Box Company, Govandi East,<br />
              Mumbai-400088,<br />
              Maharashtra, India
            </p>
            <p><strong>Grievance & Nodal Officer:</strong><br />
              Ms. Simantini Budukh<br />
              General Counsel & Compliance
            </p>
            <p><strong>Contact Details:</strong><br />
              <span role="img" aria-label="phone">📞</span> +91 8182-881881<br />
              <span role="img" aria-label="email">✉️</span> contact@theobroma.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;