import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled1';

  ngOnInit(): void {

    /* Exam 1 */
    /* const number$=new Observable(function subscribe(observer) {

       try {
         observer.next(1);
         observer.next(2);
         // throw new Error("에러발생");
         observer.next(3); // 에러 발생 시 호출 불가
         observer.complete();
       }catch (e) {
         observer.error(e);
       }
     });

     number$.subscribe({
       next:v=>console.log(v),
       error:e=>console.log(e),
       complete:()=> alert("완료") // Observer 구독 자동해지
     })*/

    /* Exam 2 */
    const interval$=new Observable(function subscribe(observer) {
      const id=setInterval(function () {
        observer.next(new Date().toString());
      },1000);
      return function () { //자원 제거 함수
        console.log("interval 제거");
        clearInterval(id);
      };
    });
    const subscription=interval$.subscribe(v=>console.log(v));

    // 5초 후 구독 해제
    setTimeout(function () {
      subscription.unsubscribe();
    },5000)
  }
}
