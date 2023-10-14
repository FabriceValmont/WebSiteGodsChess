import React, { useState } from 'react';

function ItemForm() {
  const [formData, setFormData] = useState({
    file: null,
    itemName: '',
    description: '',
    price : '',
  });

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpload = async () => {
    const { file, itemName, description, price } = formData;

    const formDataToUpload = new FormData();
    formDataToUpload.append('image', file);
    formDataToUpload.append('itemName', itemName);
    formDataToUpload.append('description', description);
    formDataToUpload.append('price', price);

    try {
      const response = await fetch('http://localhost:3000/Store/NewItem', {
        method: 'POST',
        body: formDataToUpload,
      });

      if (response.ok) {
        alert('Données et image téléchargées avec succès');
      } else {
        throw new Error('Réponse du serveur non valide');
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST : ', error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Ajouter un objet
        </h1>
          <div className="mb-2">
            <label htmlFor="ItemName" className="block text-sm font-semibold text-gray-800">
              Nom
            </label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price" className="block text-sm font-semibold text-gray-800">
              prix
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-800">
              image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-800">
              description
            </label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600" onClick={handleUpload}>
              Ajouter
            </button>
          </div>
      </div>
    </div>
  );
}

export default ItemForm;

// <div className="App">
    //   <input type="file" onChange={handleFileChange} />
    //   <input
    //     type="text"
    //     name="itemName"
    //     placeholder="Nom de l'item"
    //     value={formData.itemName}
    //     onChange={handleInputChange}
    //   />
    //   <input
    //     type="text"
    //     name="description"
    //     placeholder="Description de l'item"
    //     value={formData.description}
    //     onChange={handleInputChange}
    //   />
    //   <button onClick={handleUpload}>Ajouter</button>
    // </div>