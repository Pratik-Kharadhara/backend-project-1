const ImageKit = require('@imagekit/nodejs');
const { config } = require('dotenv');
require('dotenv').config();



const imagekit = new ImageKit({
    privateKey : process.env.IMGKIT_PVT_KEY ,
})

async function uploadFile(buffer){
    const response = await imagekit.files.upload({
    file: buffer.toString('base64') ,
    fileName: "image.jpg"
})
    return response;
}
module.exports = uploadFile ;