import { Component, OnInit } from '@angular/core';
import { rangeGenerator } from '../utils/range-generator';
import { Confirmable } from '../decorators/confirmable.decorator';
import { toast } from '../services/toast';
import { CommonModule } from '@angular/common';
import { rangeIterator } from '../utils/range-iterator';
import { Question, questions } from '../utils/questions';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  template: ` <div
      class="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg text-center"
      *ngIf="!submitted"
    >
      <h2 class="text-2xl font-bold mb-4 text-indigo-700">🧠 Quiz</h2>

      <div *ngIf="current">
        <p class="text-md font-medium mb-4 text-blue-900">{{ current.text }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            *ngFor="let opt of current.options"
            [disabled]="isLastQuestion"
            (click)="answer(opt)"
            class="btn btn-outline btn-md hover:bg-indigo-100 border-indigo-300 text-indigo-700"
          >
            {{ opt }}
          </button>
        </div>
      </div>

      <button
        class="btn btn-primary mt-6 w-full"
        (click)="submit()"
        [disabled]="!current"
      >
        ✅ Submit Quiz
      </button>
      <button
        class="btn btn-primary mt-6 w-full"
        (click)="clearToasts()"
        [disabled]="!current"
      >
        Clear Toasts
      </button>
    </div>

    <div *ngIf="submitted" class="text-center mt-12">
      <p class="text-xl font-semibold text-green-600">
        🎉 Quiz was submitted successfully!
      </p>
    </div>`,
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  generator: any;
  current: any;
  submitted: boolean = false;
  isLastQuestion = false;

  ngOnInit() {
    this.questions = questions;
    this.generator = rangeGenerator(0, this.questions.length);
    this.loadNext();
  }

  answer(choice: string) {
    if (this.current.answer === choice) {
      toast.success('Correct answer!');
    } else {
      toast.error('Wrong answer!');
    }
    this.loadNext();
  }

  loadNext() {
    const next = this.generator.next();
    if (next.done) {
      this.isLastQuestion = true;
    } else {
      this.current = this.questions[next.value];
    }
  }

  @Confirmable('Are you sure you want to submit your quiz?')
  submit() {
    toast.info('Quiz submitted!');
    this.submitted = true;
  }
  clearToasts() {
    toast.dismissAll();
  }
}
