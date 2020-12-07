import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
    //featureSelected is now a listenable event for app.component
    // and can now be placed in <app-header>

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() {
    const collapsed = true;
  }

  ngOnInit(): void {
  }

}
