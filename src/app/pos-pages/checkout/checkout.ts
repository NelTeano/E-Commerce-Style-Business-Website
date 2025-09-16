import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout implements OnInit {
  orderRef: string = '';
  shopName = 'LesTea';
  shopAddress = 'Section I Blk 17 Lot 12, Tropical Village Brgy. San Francisco, General Trias, Cavite';
  shopTel = '(+63) 0915-623-6917';
  customerCash = 20.00;

  customerName = 'Juan Dela Cruz';
  customerEmail = 'juan@email.com';
  orderItems = [
    { name: 'Caffè Americano', quantity: 2, price: 3.50, size: "Venti"},
    { name: 'Chocolate Croissant', quantity: 1, price: 2.50, size: "Regular"},
    { name: 'Strawberry Açaí Refresher', quantity: 1, price: 4.50, size: "Tall"},
  ];

  ngOnInit() {
    this.orderRef = this.generateUniqueOrderRef();
  }

  generateUniqueOrderRef(): string {
    // Add prefix + random 8 digits (e.g., ORD-12345678)
    return 'ORD-' + Math.floor(10000000 + Math.random() * 90000000).toString();
  }
  
  get total() {
    return this.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  }

  get change() {
    return (this.customerCash - parseFloat(this.total)).toFixed(2);
  }

  generatePdf() {
    const doc = new jsPDF({ unit: 'mm', format: [80, 120] });
    let y = 10;

    // Shop details
    doc.setFontSize(14);
    doc.text(this.shopName, 40, y, { align: 'center' });
    y += 5;
    doc.setFontSize(9);

    const addressMaxLineWidth = 70;
    let addressLines: string[] = [];
    let address = this.shopAddress;
    while (doc.getTextWidth(address) > addressMaxLineWidth) {
      let i = address.length;
      while (doc.getTextWidth(address.slice(0, i)) > addressMaxLineWidth && i > 0) i--;
      let lastSpace = address.slice(0, i).lastIndexOf(' ');
      if (lastSpace > 0) i = lastSpace;
      addressLines.push(address.slice(0, i));
      address = address.slice(i).trim();
    }
    if (address) addressLines.push(address);
    addressLines.forEach(line => {
      doc.text(line, 40, y, { align: 'center' });
      y += 4;
    });

    doc.text('Tel: ' + this.shopTel, 40, y, { align: 'center' });
    y += 5;

    // Order reference number (fixed per transaction)
    doc.setFontSize(9);
    doc.text('Order Ref: ' + this.orderRef, 40, y, { align: 'center' });
    y += 5;

    doc.setFontSize(10);
    doc.text('Official Receipt', 40, y, { align: 'center' });
    y += 8;

    // Customer details
    doc.setFontSize(9);
    doc.text(`Customer: ${this.customerName}`, 5, y);
    y += 5;
    if (this.customerEmail) {
      doc.text(`Email: ${this.customerEmail}`, 5, y);
      y += 5;
    }

    // Separator line
    const leftMargin = 5;
    const rightMargin = 5;
    const receiptWidth = 80;
    const maxLineWidth = receiptWidth - leftMargin - rightMargin;
    let sepLen = Math.floor(maxLineWidth / doc.getTextWidth('-'));
    let sepLine = ''.padStart(sepLen, '-');
    doc.text(sepLine, leftMargin, y);
    y += 5;

    // Header
    doc.setFont('helvetica', 'bold');
    const colItem = leftMargin;
    const colSize = leftMargin + 33;
    const colQty = leftMargin + 49;
    const colPrice = receiptWidth - rightMargin;
    doc.text('Item', colItem, y);
    doc.text('Size', colSize, y);
    doc.text('Qty', colQty, y, { align: 'right' });
    doc.text('Price', colPrice, y, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    y += 4;
    doc.text(sepLine, leftMargin, y);
    y += 5;

    // Items
    this.orderItems.forEach(item => {
      let maxNameWidth = 30;
      let name = item.name;
      let nameWidth = doc.getTextWidth(name);
      if (nameWidth > maxNameWidth) {
        let chars = name.length;
        while (doc.getTextWidth(name.slice(0, chars) + '...') > maxNameWidth && chars > 0) {
          chars--;
        }
        name = name.slice(0, chars) + '...';
      }
      doc.text(name, colItem, y);
      doc.text(item.size, colSize, y);
      doc.text(String(item.quantity), colQty, y, { align: 'right' });
      doc.text(`${(item.price * item.quantity).toFixed(2)}`, colPrice, y, { align: 'right' });
      y += 5;
    });

    doc.text(sepLine, leftMargin, y);
    y += 5;

    doc.setFontSize(11);
    doc.text(`TOTAL: ${this.total}`, 5, y);
    y += 6;

    doc.setFontSize(10);
    doc.text(`Cash:  ${this.customerCash.toFixed(2)}`, 5, y);
    y += 5;
    doc.text(`Change: ${this.change}`, 5, y);
    y += 7;

    doc.setFontSize(9);
    doc.text('Thank you for your purchase!', 40, y, { align: 'center' });
    y += 5;
    doc.text('Please come again!', 40, y, { align: 'center' });

    doc.save('receipt.pdf');
  }
}
