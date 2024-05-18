import { Component, OnInit } from '@angular/core';
import { ShortenerService } from '../../services/shortener.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-shortener',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ClipboardModule],
  providers: [ShortenerService],
  templateUrl: './shortener.component.html',
  styleUrl: './shortener.component.scss'
})
export class ShortenerComponent implements OnInit {

  constructor(private shortenerService: ShortenerService){

  }
  
  ngOnInit(): void {
    this.shortenerService.getShorten().subscribe(x => {
      console.log(x)
    }, error => {
      console.log("error:", error)
    })
  }

  link = 'https://blablabla.com';
}
