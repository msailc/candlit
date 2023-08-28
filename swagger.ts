import swaggerAutogen from 'swagger-autogen';

const outputFile = './src/swagger/swagger_output.json';
const endpointsFiles = ['./src/router.ts'];

swaggerAutogen()(outputFile, endpointsFiles);
