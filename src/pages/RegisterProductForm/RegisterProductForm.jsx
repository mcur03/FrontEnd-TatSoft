import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CampoTexto from '../../components/atoms/CamposTexto';
import Botones from '../../components/atoms/Botones';
import Tipografia from '../../components/atoms/Tipografia';

// URL base del backend (ajusta según tu configuración de Azure)
const API_URL =
  import.meta.env.VITE_APP_API_URL || 'https://backendproducts-eefufaaeaahzauee.eastus-01.azurewebsites.net';

const RegisterProductForm = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidadIngreso, setCantidadIngreso] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Cuando se selecciona un archivo, se genera la URL de vista previa
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Cleanup de la URL de vista previa cuando el componente se desmonte o se cambie la imagen
  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  // Función para subir la imagen al microservicio de imágenes
  const handleUploadImage = async () => {
    if (!imageFile) {
      alert('Por favor seleccione una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      setLoading(true);
      // Se hace la petición al endpoint /upload-image (ver upload_image_product.ts)
      const response = await axios.post(`${API_URL}/upload-image`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const { url } = response.data;
      setUploadedImageUrl(url);
      alert('Imagen subida correctamente.');
    } catch (err) {
      console.error('Error al subir la imagen:', err);
      setError('Error al subir la imagen.');
    } finally {
      setLoading(false);
    }
  };

  // Función para enviar el formulario de registro de producto
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se permite enviar el formulario solo si se ha subido la imagen
    if (!uploadedImageUrl) {
      alert('Debe subir la imagen antes de enviar el formulario.');
      return;
    }

    const productData = {
      nombre_producto: nombreProducto,
      precio: parseFloat(precio),
      descripcion,
      cantidad_ingreso: parseInt(cantidadIngreso, 10),
      id_imagen: uploadedImageUrl,
    };

    try {
      setLoading(true);
      // Se envía la información al endpoint /register-product (ver register_product.ts)
      await axios.post(`${API_URL}/register-product`, productData);
      alert('Producto registrado con éxito.');

      // Limpiar el formulario
      setNombreProducto('');
      setPrecio('');
      setDescripcion('');
      setCantidadIngreso('');
      setImageFile(null);
      setPreviewImage('');
      setUploadedImageUrl('');
    } catch (err) {
      console.error('Error registrando producto:', err);
      setError('Error al registrar el producto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Tipografia variant="h1" size="2xl" className="mb-4">
        Registro de Producto
      </Tipografia>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <CampoTexto
          label="Nombre del Producto"
          id="nombre_producto"
          placeholder="Ingrese el nombre del producto"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          required
        />
        <CampoTexto
          label="Precio"
          id="precio"
          type="number"
          placeholder="Ingrese el precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <div className="mb-2">
          <label
            htmlFor="descripcion"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            placeholder="Ingrese la descripción del producto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <CampoTexto
          label="Cantidad Ingreso"
          id="cantidad_ingreso"
          type="number"
          placeholder="Ingrese la cantidad"
          value={cantidadIngreso}
          onChange={(e) => setCantidadIngreso(e.target.value)}
          required
        />
        <div className="mb-2">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Imagen del Producto
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
          />
          {previewImage && (
            <div className="mt-2">
              <img
                src={previewImage}
                alt="Vista previa"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
          <button
            type="button"
            onClick={handleUploadImage}
            className="mt-2 w-full py-2 rounded-lg bg-purple-500 text-white font-bold hover:bg-purple-600"
            disabled={loading || !imageFile}
          >
            {loading ? 'Subiendo...' : 'Subir Imagen'}
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center mt-4">
          <Botones label="Registrar Producto" tipo="primario" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default RegisterProductForm;
