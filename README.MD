### first electron app creation.

1. npm i electron --save-dev

- electron 에는 main 프로세스, renderer 프로세스가 존재한다. 
- main은 꼭 있어야 하는 진입점, renderer는 0개 이상 여러개 포함 가능.

- main 은 app.js로 설정
- package.json 파일에서 start script 추가 (electron 실행)
