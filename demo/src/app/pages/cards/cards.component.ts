import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  abilities: any[] = [];
  selectedAbility: string = 'stench';
  apiUrl = 'https://pokeapi.co/api/v2/ability/';


  habilidadesDisponibles = [
    {name: 'stench', label: 'Stench'},
    {name: 'drizzle', label: 'Drizzle'},
    {name: 'speed-boost', label: 'Speed Boost'},
    {name: 'battle-armor', label: 'Battle Armor'},
    {name: 'sturdy', label: 'Sturdy'},
    {name: 'damp', label: 'Damp'},
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerHabilidad(this.selectedAbility);
  }

  obtenerHabilidad(habilidad: string) {
    this.http.get<any>(`${this.apiUrl}${habilidad}/`).subscribe(
      (respuesta) => {
        console.log('Datos de la habilidad:', respuesta);

        this.abilities = respuesta.pokemon.slice(0, 10).map((poke: any) => ({
          nombre: poke.pokemon.name,
          url: poke.pokemon.url
        }));
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  onAbilityChange(event: any) {
    this.selectedAbility = event.target.value;
    this.obtenerHabilidad(this.selectedAbility);
  }

  getPokemonId(url: string): string {
    return url.split('/').filter(segment => segment).pop() || '';
  }
}
