const express = require("express");
const upload = require("express-fileupload");

const app = express();

const port = process.env.PORT || 7000;

app.use(upload());

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
})

app.post("/", (req, res) => {
	if(req.files) {
		// console.log(req.files);
		let file = req.files.file
		let filename = file.name
		// console.log(filename);

		file.mv('./uploads/'+filename, function (err) {
			if (err) {
				res.send(err)
			}else{
				res.send("File Uploaded successfully")
			}
		})
	}
})


app.listen(port, () =>{
	console.log(`The server is listening at port ${port}`);
})