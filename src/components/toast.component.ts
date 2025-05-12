import { Component, OnInit, OnDestroy } from '@angular/core';
import { toast } from '../services/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="toast toast-top">
      <div [ngClass]="className" class="alert">
        <span>{{ message }}</span>
      </div>
    </div>
  `,
})
export class ToastComponent implements OnInit, OnDestroy {
  message = '';
  className = '';

  private handler = (type: string, message?: string) => {
    if (type === 'dismiss-all') {
      this.message = '';
      this.className = '';
    } else if (message) {
      this.message = message;
      this.className =
        {
          success: 'alert-success',
          error: 'alert-error',
          info: 'alert-info',
        }[type] || 'alert-info';

      setTimeout(() => (this.message = ''), 5000);
    }
  };

  ngOnInit() {
    toast.subscribe(this.handler);
  }

  ngOnDestroy() {
    toast.unsubscribe(this.handler);
  }
}
