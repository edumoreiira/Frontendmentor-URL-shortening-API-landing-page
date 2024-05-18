import { Component, OnInit } from '@angular/core';
import { ShortenerService } from '../../services/shortener.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shortener',
  standalone: true,
  imports: [HttpClientModule],
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
}
