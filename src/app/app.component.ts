import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myList: Person[] = [
    { id: 0, name: 'Test1' },
    { id: 1, name: 'Test2' },
    { id: 2, name: 'Test3' }
  ];
  title = 'app works!';
  txt = '';

  add(input: HTMLInputElement) {
    console.log('added value: ' + input.value);
    let newValue = { id: this.myList.length, name: input.value };
    this.myList.push(newValue);
    input.value = null;
  };

  removeItem(li: Person) {
    let index = this.myList.indexOf(li);
    console.log(`remove:${li.id} index: ${index}`);
    this.myList.splice(index, 1);
  };
}

export class Person {
  id: number;
  name: string;
}
