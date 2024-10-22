import React, { useState, useEffect } from 'react';

const CombinedForm = ({ urlPath }) => {
  const [formType, setFormType] = useState('contact');

  // Set the initial form type based on urlPath when the component mounts
  useEffect(() => {
    if (urlPath === '/prayer') {
      setFormType('prayer');
    } else {
      setFormType('contact');
    }
  }, [urlPath]);

  const handleToggle = () => {
    setFormType((prev) => (prev === 'contact' ? 'prayer' : 'contact'));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div 
        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105" 
        style={{ height: '75vh', maxHeight: '75vh', width: '90%', maxWidth: '600px' }} // Increased width here
      >
        <div className="p-6 h-full overflow-y-auto">
          <h2 className="text-xl font-bold text-center mb-4">
            {formType === 'contact' ? 'Contact Us' : 'Prayer Request'}
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              {formType === 'contact' ? (
                <>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </>
              ) : (
                <>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="prayerTopic">
                    Prayer Topic
                  </label>
                  <select id="prayerTopic" className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                    <option value="healing">Healing</option>
                    <option value="guidance">Guidance</option>
                    <option value="thanksgiving">Thanksgiving</option>
                  </select>
                </>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="details">
                {formType === 'contact' ? 'Message' : 'Prayer Details'}
              </label>
              <textarea
                id="details"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows="4"
                required
              ></textarea>
            </div>
            {formType === 'prayer' && (
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Would you like to be contacted?
                </label>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleToggle}
              className="mt-4 w-full text-blue-600 underline"
            >
              Switch to {formType === 'contact' ? 'Prayer Request' : 'Contact Us'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CombinedForm;
