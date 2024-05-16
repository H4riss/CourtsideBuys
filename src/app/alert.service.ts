import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 }); // Display for 3 seconds
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000, panelClass: 'error-snackbar' });
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, { duration: 3000 });
  }
}
