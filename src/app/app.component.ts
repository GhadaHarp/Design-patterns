import { Component } from '@angular/core';
import { QuizComponent } from '../components/quiz.component';
import { toast } from '../services/toast';
import { ToastComponent } from '../components/toast.component';

@Component({
  selector: 'app-root',
  imports: [QuizComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'design-patterns';
}
