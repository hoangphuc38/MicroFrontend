import { Component, inject, DestroyRef, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe, JsonPipe, DatePipe, NgIf, CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private productService = inject(ProductService);
  protected productDetails: any = null;
  protected loading = false;
  protected error: string | null = null;

  constructor() {
    // Sử dụng takeUntilDestroyed để tự động unsubscribe
    this.productService.productSelected$.pipe(
      takeUntilDestroyed()
    ).subscribe({
      next: async (productId) => {
        console.log('Received product ID:', productId);
        try {
          this.loading = true;
          this.error = null;
          this.productDetails = null;

          const details = await this.productService.getProductDetails(productId);
          console.log("Product details in Angular:", details);
          this.productDetails = details;
        } catch (error) {
          this.error = 'Failed to load product details';
          console.error('Error:', error);
        } finally {
          this.loading = false;
        }
      },
      error: (error) => {
        this.error = 'Error receiving product selection';
        console.error('Subscription error:', error);
      }
    });
  }
}
