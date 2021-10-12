## nodejs 를 이용해서 게시판기능 웹을 구현한다.

#### 1. 서버를 만들기위해서 nodejs 유명한 라이브리중 하나인 express 라이브러리를 이용하여

#### http://localhost:8080 이 주소로 서버를 만든다.

user_lists 프로젝트 생성후 npm 을 통해서 폴더를 초기화하면 package.json 을 생성한다.

```
mkdir user_lists
cd user_lists
npm init -y 
```



package.json

```json
{
  "name": "user_lists",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```



app.js파일을 생성후 다음 같이 코드를 생성한다.

​	(1) express 를 임포트 한다.

​		

```javascript
require('express')
```



```powershell
npm install express
```

```javascript
var express = require("express")

var app = express()


app.get('', function(req, res){
    res.send("Hello World!!")
})


app.listen(8080, function(){
    console.log("Server is runing!")
})
```





node app.js 실행하면 http://localhost:8080 서버가 실행이 되고

클라이언트(크롬브라우저)를 통해서 GET방식으로 http://localhost:8080으로 request 를 하면

"Hello World!!" 문자열을 클라이언트에 send 해주고 클라언트는 그 데이타 받아서 처리한다.

그러므로 다음과 같은 결과가 나온다.



![image-20211008212935266](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20211008212935266.png)



##### var express = require("express") 

##### express 라이브러리를 import 해서 express 새로운 인스턴스 생성시킨다.

##### var app = express()

app이라는 새로운 인스턴스 생성된다.

##### 새로운 app안에는 listen , get , post 등등의 여러가지 메소드(함수)와 프로퍼티(속성값) 를 가지고 있고 

##### app다음에 .(점)을 찍은 다음 원하고자는 메소드나 프로퍼티 호출하면된다.



listen메소를 호출하는데 app.listen() 이런식으로 호출한다.

##### 역활은 서버를 띄우고 대기하고 있게 만드는 역활을 하는 메소드이다.

##### listen 이라는 메소드 안에 인자로 받는것 중에 첫번째 인자로 받는 것은 포트 번호를 인자로 받고 그 다음 인자로 콜백함수를 받는다.

그렇다면 콜백함수라는 것은 함수안에 다시 함수를 호출하는 함수를 콜백함수라고 한다.



클라이언트가 GET방식으로 요청(request)을 했을때  서버가  Reponse하기 위해서는 app이라는 인스턴스 안에 있는 get메소드를 이용해서 처리한다.

app.get()를 실행시켜주면된다.

get이라는 메소는 인자로 받는 것중에 첫번째인자로 경로를 정해주는 역활을 하는 것을 인자로 받는데 문자열에 형태로 적는다.



' ' 이렇게 적었다면 http://localhost:8080 경로로 요청이 들어 왔을떄 처리하고 자 할 때 이다.

예를 들어 http://localhost:8080/data 경로로 요청이 들어왔을때 처리하고자 한다면 인자값으로 "/data" 라고 적어주면 된다.

두번째 인자로 받는것중에 콜백함수를 받는다.

여기서의 콜백 함수는 매개변수(인자)를 두개를 받아서 처리한다.

첫번째 req라고 임의로 정한 매개변수에는 클라이언트 요청을 하면서 보낸 많은 데이타를 여기에 저장시켜주고 그걸 처리할 수 있는 메소드등을 저장시켜준다.



두번째 res라고 임의로 정한 매개변에는 클라이언트에 응답을 보낼 수 있는 많은 메소드와 프로퍼티등을 저장시켜 둔다.

누가 ? get 이라는 메소드 실행이 다 끝난후에 처리한 결과를 각각에 저장시켜 준다.



http://localhost:8080 주소로 방식은 GET방식으로 요청이 오면 서버는 index.html파일을 열어서 Document Data로 변환해서 

request한 클라이언트에서 response해준다.

index.html 파일에 Hello world!! 라는 문자열을 표현하는 내용의 html tag언어로 이루어진 코드가 있고 그 코드를 문서데이터 변환해서 

클라이언트 보내준다.



app.js파일의 다음과 같이 코드를 수정한다.

html 탬플릿 폴더가 있는 기본 폴더를 지정해주기 위해 set매소드를 이용하요 등록한다.

```javascript
app.set('views' , __dirname +'/views')
```

현재 app.js파일 실행되고 있는 위치를 기준으로 views폴더를 기본 탬플릿 폴더로 지정해준다.

render 매소를 실행했을때 그안 파일이 어떤 형태의 파일로 되어 있는 것을 받을 수 있는지 지정해 주어햔다.

그리고 express는 ejs엔진을 사용하는 데 ejs는 html 문서안데 일부 자바스크립트 코드를 편하게 작성하고자 만든 엔진이다.

다음과 같이 app.js에 코드를 추가한다.

```javascript
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile)
```



app.get('/') ... 이부분을 다음과 같이 수정한다.

```javascript
app.get('/', function(req, res){
    return res.render('index.html')
})
```





views/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!!</h1>
</body>
</html>
```



res.render(html 탬플릿 , 데이터(객체) ) 형식으로 코드를 작성하면 html 문서와 data를 함께 변형해서 문서 데이터를 만들어 

보내준다.

다음과 같이 코드를 수정한다.

app.js 

```javascript
app.get('/', function(req, res){
    return res.render('index.html',{name:"태경"})
})
```



views/index.html 

```html
<body>
    <h1>Hello World !!</h1>
    <h2>안녕하세요 <%= name %>님</h2>
</body>
```

ejs문법을 이용하여 데이터를 받아 처리한다.



ejs문법과 관련된 간단한 요약 설명은 다음과 같다.



## 기본 문법

- 주석 : <%# ... %>
- JS 코드 : <% ... %>
- 변수 출력(html escape 처리: >를 $gt로 변환) : <%= ... %>
- 태그내부 공백 제거 : <%_ ... _%>
- html escape안하고 변수 출력 : <%- ... %>



라우팅 파일을 만들어서 app.js에 미들웨어로 등록을 시킨다음 서버를 구성한다.

라우팅 파일은 router/main.js파일에 다음과 같이 코드를 생성하여 만든다.`

그런데 자바스크립트언어는 파일을 만들어 다른 파일에서 import하기 위해서는 그 파일을 꼭!!!!! export해야 한다.(모듈등으로 만들어 임포트해서 사용하는 코드들을 export 한다고 지정해줘야 만이 다른 파일에서 import해서 쓸수 있기 때문이다.)

```javascript
var express = require('express')

var route = express.Router()

route.get('/', function(req, res){
    return res.render('index.html',{name:"태경"})
})

route.get("/data",function(req, res){
    return res.send("데이터 보낸겁니다.")
})

module.exports = route
```



app.js파일에 라우팅 파일을 임포트해서 미들웨어 등록을 한다.

다음과 같이 코드를 추가한다.

```javascript
...
var apiRouter = require('./router/main')
....


// 미들웨어 등록
app.use('/',apiRouter)
....
```



게시판 모양을 만들어 보기 위해서 임의의 데이터를 하나 만들어 준다.

data.js파일을 생성후 다음과 같이 코딩한다.

```javascript
articles = [  {  'id': 1,  'title':'Article one',  'body':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  'author':'vasanth',  'create_date':'04-09-2018',  }, 
{  'id': 2,  'title':'Article two',  'body':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  'author':'vasanth nagarajan',  'create_date':'05-09-2018',  },  
{  'id': 3,  'title':'Article three',  'body':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  'author':'nagarajan vasanth',  'create_date':'04-09-2018',  } ]


function Articles(){
    return articles
}

module.exports = Articles;
```





index.html에 위와 같은 데이터를 랜더링해 주기 위해  data.js파일을 router/main.js 에서 임포트 하고 

main.js 의 app.route('/').... 부분을 다음과 같이 수정한다.

router/main.js

```javascript
....
var Articles = require('../data')
...

route.get('/', function(req, res){
    data = Articles()
    return res.render('index.html',{name:"태경" , articles:data})
})
```



index.html 을 랜더링할때 data 를 활용할 수 있다.

index.html을 다음과 같이 수정한다.

```html
...
 <table style="width:100% ; ">
        <tr >
          <th>ID</th>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>DATE</th>
          <th>EDIT</th>
        </tr>

    <% for (i=0;i<articles.length;i++) { %>
        <tr>
            <td><%= articles[i]['id'] %></td>
            <td><%= articles[i]['title'] %></td>
            <td><%= articles[i]['author'] %></td>
            <td><%= articles[i]['create_date'] %></td>
            <td><button>삭제</button><button>수정</button></td>
        </tr>
        <% } %>
    </table>
    <% for (i=0;i<articles.length;i++) { %>
    <h2> <%= articles[i]['title'] %></h2>
    <p> <%= articles[i]['body'] %></p>
    <% } %>
 ...
```



table 안에 타이틀 클릭하면 상세 페이지로 이동하는 기능을 구현한다.

views/index.html 을 다음과 같이 수정한다.



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        table, th, td {
            border:1px solid black;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <h1>Hello World !!</h1>
    <h2>안녕하세요 <%= name %>님</h2>

    <table style="width:100% ; ">
        <tr >
          <th>ID</th>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>DATE</th>
          <th>EDIT</th>
        </tr>

    <% for (i=0;i<articles.length;i++) { %>
        <tr>
            <td><%= articles[i]['id'] %></td>
            <td><a href="/details/<%= articles[i]['id'] %>"><%= articles[i]['title'] %></a></td>
            <td><%= articles[i]['author'] %></td>
            <td><%= articles[i]['create_date'] %></td>
            <td><button>삭제</button><button>수정</button></td>
        </tr>
        <% } %>
    </table>
    

</body>
</html>
```



타이틀을 클릭 했을때 예를 들어 첫번째를 클릭하면 http://localhost:8080/details/1 여기로 get방식으로 이동한다.

맨뒤에 나오는 경로 1과 같은것을 parameter처리해서 구현한다.

처음 경로의 한 부분을 파라미터 처리 한 부분을 테스트 하기 위해 

router/main.js 에 다음과 같은 코드를 추가한다.

```javascript
route.get('/details/:id', function(req, res){
    
    console.log(req.params.id)
    // return res.send("SUCCESS")
    return res.render('details.html' ,{data:req.params.id} )
})
```





views/details.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>details</title>
</head>
<body>
    <h1>상세페이지</h1>
    <h2> <%= data %></h2>
</body>
</html>
```

