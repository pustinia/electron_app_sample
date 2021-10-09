"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // submit 동작
    document.getElementById("comment-form").onsubmit = () => {
        // input 추출하기
        const commentInput = document.getElementById("comment-input");
        // 내용 체크
        if(!commentInput["value"]) {
            return false;
        }
        // li element 생성
        const newComment = document.createElement("li");
        // 생성한 li 요소를 DOM에 넣기
        newComment.innerText = commentInput["value"];
        document.getElementById("comments").appendChild(newComment);
        // 입력한 요소를 지우기
        commentInput["value"] = "";
        return false; // 항상 false, 그래야 데이터가 넘어가지 않고 화면에 있다.
    }
});