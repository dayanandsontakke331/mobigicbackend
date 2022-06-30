const fileUploadModel = require('../model/uploadFile')

exports.save_files = async(req, res) =>{

    try {
        //Random six digit id for files
        let file = req.files[0];
        console.log(file)
        const randomNumber = (Math.floor(100000 + Math.random() * 900000));
        
        const saveFile = new fileUploadModel({
            "pimage" : file.filename,
            "file_id" : randomNumber
        })
        
        await saveFile.save()
        res.send("Upload Success check uploads");
        console.log(randomNumber)
        return
       
    } catch (error) {

        console.log(error);
        res.send(error)
        
    }
}

exports.find_files = async(req, res)=>{

    try {

        const all_files = await fileUploadModel.find()
        res.send(all_files);
        console.log(all_files);

    } catch (error) {

        console.log(error);
        res.send(error);

    }
}


// delete file by random six digit file id
exports.delete_file = async (req, res)=>{

    console.log(req.params.fileId)

    fileUploadModel.findOneAndDelete({file_id : req.params.fileId},
 
        (err, data)=>{

            if(err){

               res.status(500).json({"error" : err})
               console.log(err)

            }else{

                res.status(200).json(data)
                console.log("No error file deleted success")

            }
        }
        )
}
