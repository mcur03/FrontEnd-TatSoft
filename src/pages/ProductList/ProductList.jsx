import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tipografia from '../../components/atoms/Tipografia';
import Iconos from '../../components/atoms/Iconos';
import Botones from '../../components/atoms/Botones';

// URL base del backend (ajusta según corresponda)
const API_URL =
  import.meta.env.VITE_APP_API_URL || 'https://backendproducts-eefufaaeaahzauee.eastus-01.azurewebsites.net';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Obtener la lista de productos desde el backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/get-products`);
        setProducts(response.data);
      } catch (err) {
        console.error('Error al obtener productos:', err);
        setError('Error al obtener los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <Tipografia variant="h1" size="2xl" className="mb-4">
        Catálogo de Productos
      </Tipografia>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id_producto}
              className="border rounded-lg p-4 shadow-md bg-white flex flex-col"
            >
              <img
                src={product.id_imagen}
                alt={product.nombre_producto}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <Tipografia variant="h2" size="lg" className="mb-2">
                {product.nombre_producto}
              </Tipografia>
              <p className="text-gray-700 mb-2">${product.precio}</p>
              <p className="text-gray-600 mb-2">{product.descripcion}</p>
              <div className="mt-auto">
                <Botones
                  label="Ver Producto"
                  tipo="primario"
                  onClick={() =>
                    console.log('Ver producto', product.id_producto)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
