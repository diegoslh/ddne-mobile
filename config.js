
/* URI significa "Identificador Uniforme de Recursos" (en inglés, Uniform Resource Identifier). 
Es una cadena de caracteres que identifica un recurso particular. En el contexto de las solicitudes HTTP, una URI se refiere a la dirección única que se utiliza para acceder a un recurso en la web.*/

//♨️ Puerto de Aplicación
const PORT = process.env.PORT || 5000;

//♨️ Conexión con API 
const IPv4 = '10.175.80.83';
export const URI = `http://${IPv4}:${PORT}`;
