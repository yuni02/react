const express = require("express")
const app = express()
const port = 3000
const router=require("./router")//모듈화된 파일 가져다 사용 가능
console.log(router)
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
//request 객체의 body 데이터를 중첩된 json 객체 형식으로 사용하기 위한 설정

//정적 리소스를관리하는 폴더를 static()으로 저장하면 해당 폴더 경로가 라우터로 인식되지 않고 리소스 파일에 접근 가능
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.listen(port, function(error){
    if(error){
        console.log("에러발생", error);
    }
    console.log(port+'번 포트로 로컬 서버 실행!')
})

router(app);