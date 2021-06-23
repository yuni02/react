const Router =function(app){
    //주소와 그에 대한 연결처리 관리
    //주소에 맞는 기능 가지고 있는 컨트롤러로 구성

    const MainController=require('./controllers/MainController')
    console.log(MainController)


    //localhost:port
    app.get('/', function(req,res){
        console.log('메인으로 전환')
        res.redirect('/main')
        //바로 답장 보내주는게 아니라 뭘 보내주는게아니라 main으로 넘겨버림.
    })


    app.get('/main', function(req,res){
        console.log('/main 경로로 접속!')
        //'/main' 주소로 요청들어오면  MainController에 mainView를 호출해 요청에 대한 실질적인 처리를 contorller에서 수행시킴.
        //기능 기능 기능 이 아니라 controller로 연결시키주려고 함
        MainController.mainView(req,res)
    })  

    app.post('/add', function(req,res){
        MainController.addUser(req,res);
    });
//얘를 모듈화시킴

    app.post('/create/new', function(req, res){
        MainController.createNewUser(req, res);
    });

    const DetailController=require('./controllers/DetailController')

// /detail?index='<%=data.index%>/name=<%=data.name%>/position=<%=data.position%>">

//localhost:3000/detail/index 숫자값 삽입 가능하고 index 라는 이름으로 식별 가능하게 콜론을 꼭 붙여줘야 새로운 주소 안생김
app.get('/detail/:index', function(req,res){
    DetailController.detailView(req,res);
});

};
//새 경로 추가하고 싶으면 여기다가 작성해주면 됨.


module.exports = Router;