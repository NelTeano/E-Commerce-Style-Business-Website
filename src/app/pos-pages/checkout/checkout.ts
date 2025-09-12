import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {
  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
  }

  generatePdf() {
    const docDefinition: any = {
      content: [
        { text: 'BakeryApp Receipt', style: 'header' },
        { text: 'Thank you for your purchase!', margin: [0, 20, 0, 8], style: 'normal' }
        // Add more content as needed
      ],
      styles: {
        header: { fontSize: 18, bold: true },
        normal: { fontSize: 12 }
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }
}
