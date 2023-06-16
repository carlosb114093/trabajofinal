import { Component,OnInit } from '@angular/core';
import { ApiService} from '../../service/api.service';
@Component({
  selector: 'app-morty',
  templateUrl: './morty.component.html',
  styleUrls: ['./morty.component.css']
})
export class MortyComponent implements OnInit {
 public characters: any;
item: any;
 constructor(private apiService: ApiService){ }
 ngOnInit(): void {

 this.apiService.getCharacters().subscribe((data) => {
  console.log(data);
  this.characters=data;
});
}
}
