const imageValidate = (images) => {
    let imagesTable = []
    if(Array.isArray(images)){
        imagesTable = images
    }else{
        imagesTable.push(images)
    }

    if(imagesTable.length > 3){
        return {error:"You can't upload more than 3 images"}
    }
    for(let image of imagesTable){
        if(image.size > 1048576){
            return {error:"Image size must be less than 1MB"}
        }
        const filetypes = /jpeg|jpg|png/
        const extname = filetypes.test(image.mimetype)
        if(!extname){
            return {error:"Only upload image file types jpg, png, jpeg"}
        }
    }
    return {error:false}
}

module.exports = imageValidate