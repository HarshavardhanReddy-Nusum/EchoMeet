let IS_PROD = true;

const server = IS_PROD ?
    "https://echomeet-1khr.onrender.com" :
    "http://localhost:8080"


export default server;