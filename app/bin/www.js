"ues strict"

const app = require("../app")
const port = 3000;    

app.listen(port, () => {              // 서버연결
    console.log(port + `번에서 연결 대기중`);            
})