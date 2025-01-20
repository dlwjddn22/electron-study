# Electron + React 공부

## 초기환경구성

### 프로젝트 생성
```
npx create-react-app [프로젝트명]
```
### yarn 설치
```sh
npm install -g yarn
yarn -v

# powershell에서 오류시 관리자권한으로 실행후 아래 명령어 실행
Set-ExecutionPolicy Unrestricted 
ExecutionPolicy

#yarn이 정상적으로 동작하지 않고 설치도 안될때 수동으로 yarn install 파일 받아서 설치 후 재실행
```
### electron 설치
```sh
yarn add --dev electron
```
### react, electron 실행 순서 제어 설치
```sh
yarn add --dev concurrently wait-on
```

## 실행

```sh
# react 서버 시작 후 electron 실행
yarn dev
```


# 참고 사이트
https://codegear.tistory.com/36
