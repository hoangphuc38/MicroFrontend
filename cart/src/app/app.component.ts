import { Component, inject, DestroyRef, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe, JsonPipe, DatePipe, NgIf, CommonModule } from '@angular/common';
import { SingleSpaProps, singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart';
}
