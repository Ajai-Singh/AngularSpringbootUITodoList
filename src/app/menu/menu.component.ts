import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [HardcodedAuthService]
})
export class MenuComponent implements OnInit {

  constructor(private authService : HardcodedAuthService) { }

  ngOnInit() {
  
  }

  removeSessionStorage() {
    sessionStorage.clear()
  }
}
