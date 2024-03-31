import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent implements OnInit, OnDestroy {

  private authService = inject(AuthService)
  isAuth = false;
  authSubscription!: Subscription;

  @Output()
  sideNavToggle = new EventEmitter<void>();

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  onClose() {
    this.sideNavToggle.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
