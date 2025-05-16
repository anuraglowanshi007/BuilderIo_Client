import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  // Fetch user data (mocked for now, you can integrate actual API)
  useEffect(() => {
    // Replace with your actual API call
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // const response = await axios.get('/api/user/me');
        // setProfile(response.data.data);

        // TEMP MOCK
        setProfile({
          fullname: "John Doe",
          username: "johndoe",
          email: "john@example.com",
        });
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Replace with your API call to update profile
    try {
      setLoading(true);
      // await axios.put('/api/user/update', { fullname: profile.fullname });
      console.log("Updated profile:", profile);
      alert("Profile updated!");
    } catch (error) {
      console.error("Update failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>

          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            </div>

            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                <div className="sm:col-span-6">
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={profile.fullname}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={profile.username}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    disabled
                    className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
