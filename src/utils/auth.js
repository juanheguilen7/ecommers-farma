import jwt from 'jsonwebtoken';

// Función para crear un token JWT
export const generateToken = (userData) => {
    // Aquí, userData podría ser el ID del usuario u otros datos que quieras incluir en el token
    return jwt.sign(userData, 'clave_secreta', { expiresIn: '1h' }); // 'clave_secreta' debería ser reemplazada por tu clave secreta real
};

// Función para verificar y decodificar un token JWT
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'clave_secreta'); // Verificar y decodificar el token usando la misma clave secreta
        return decoded;
    } catch (error) {
        return null; // Si hay algún error en la verificación del token, devolver null
    }
};