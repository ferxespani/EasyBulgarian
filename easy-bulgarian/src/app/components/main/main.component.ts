import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => console.log(data.ip));
  }
}
