import React from 'react'

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-2xl font-semibold text-center text-gray-700">
            Connexion
            </h1>
            <form className="mt-6">
            <div className="mb-2">
                <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
                >
                Email
                </label>
                <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
                >
                Mot de passe
                </label>
                <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                Se connecter
                </button>
            </div>
            </form>
        </div>
    </div>
);
}

export default Login