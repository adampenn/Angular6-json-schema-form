export const esValidationMessages: any = { // Default English error messages
  noneOption: 'Ninguna',
  required: 'Este campo es requerido.',
  minLength: 'Debe tener {{minimumLength}} caracteres o más (longitud actual: {{currentLength}})',
  maxLength: 'Debe tener {{maximumLength}} caracteres o menos (longitud actual: {{currentLength}})',
  pattern: 'Debe coincidir con el patrón: {{requiredPattern}}',
  format: function (error) {
    switch (error.requiredFormat) {
      case 'date':
        return 'Debe ser una fecha, como "2000-12-31"';
      case 'time':
        return 'Debe ser una hora, como "16:20" o "03:14:15.9265"';
      case 'date-time':
        return 'Debe ser una fecha y hora, como "2000-03-14T01:59" o "2000-03-14T01:59:26.535Z"';
      case 'email':
        return 'Debe ser una dirección de correo electrónico, como "nombre@example.com"';
      case 'hostname':
        return 'Debe ser un nombre de host, como "example.com"';
      case 'ipv4':
        return 'Debe ser una dirección IPv4, como "127.0.0.1"';
      case 'ipv6':
        return 'Debe ser una dirección IPv6, como "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
      // TODO: add examples for 'uri', 'uri-reference', and 'uri-template'
      // case 'uri': case 'uri-reference': case 'uri-template':
      case 'url':
        return 'Debe ser una URL, como "http://www.example.com/page.html"';
      case 'uuid':
        return 'Debe ser un uuid, como "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
      case 'color':
        return 'Debe ser un color, como "#FFFFFF" o "rgb(255, 255, 255)"';
      case 'json-pointer':
        return 'Debe ser un puntero JSON, como "/pointer/to/something"';
      case 'relative-json-pointer':
        return 'Debe ser un puntero JSON relativo, como "2/pointer/to/something"';
      case 'regex':
        return 'Debe ser una expresión regular, como "(1-)?\\d{3}-\\d{3}-\\d{4}"';
      default:
        return 'Debe estar correctamente formateado ' + error.requiredFormat;
    }
  },
  minimum: 'Debe ser {{minimumValue}} o más',
  exclusiveMinimum: 'Debe ser más de {{exclusiveMinimumValue}}',
  maximum: 'Debe ser {{maximumValue}} o menos',
  exclusiveMaximum: 'Debe ser menor que {{exclusiveMaximumValue}}',
  multipleOf: function (error) {
    if ((1 / error.multipleOfValue) % 10 === 0) {
      const decimals = Math.log10(1 / error.multipleOfValue);
      return `Debe tener${decimals} o menos decimales.`;
    } else {
      return `Debe ser un múltiplo de  ${error.multipleOfValue}.`;
    }
  },
  minProperties: 'Debe tener {{minimumProperties}} o más elementos (elementos actuales: {{currentProperties}})',
  maxProperties: 'Debe tener {{maximumProperties}} o menos elementos (elementos actuales: {{currentProperties}})',
  minItems: 'Debe tener {{minimumItems}} o más elementos (elementos actuales: {{currentItems}})',
  maxItems: 'Debe tener {{maximumItems}} o menos elementos (elementos actuales: {{currentItems}})',
  uniqueItems: 'Todos los elementos deben ser únicos',
  // Note: No default error messages for 'type', 'const', 'enum', or 'dependencies'
};
