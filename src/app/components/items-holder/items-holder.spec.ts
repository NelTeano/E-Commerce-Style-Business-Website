import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsHolder } from './items-holder';

describe('ItemsHolder', () => {
  let component: ItemsHolder;
  let fixture: ComponentFixture<ItemsHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
