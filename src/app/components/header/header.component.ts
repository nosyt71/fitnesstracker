import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth = false;
  authSubscription!: Subscription;

  private authService = inject(AuthService)

  @Output()
  sideNavToggle = new EventEmitter<void>();

  ngOnInit(): void {
      this.authSubscription = this.authService.authChange.subscribe(authStatus => {
        this.isAuth = authStatus;
      })
  }

  onToggleSideNav() {
    this.sideNavToggle.emit();
  }
  
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  
}
